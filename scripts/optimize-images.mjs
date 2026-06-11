import { readdir, mkdir, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const SRC_DIR = path.join(root, 'raw-images')
const OUT_DIR = path.join(root, 'src', 'assets')

// Lebar maksimum per gambar agar hemat tanpa kehilangan ketajaman di layar retina.
const MAX_WIDTH = 1280
const QUALITY = 80
// Jumlah piksel yang dipangkas dari bawah (setelah resize ke 1280px) untuk
// menghilangkan watermark "ai" yang menempel di pojok kanan-bawah gambar sumber.
const WATERMARK_CROP = 95

async function run() {
  await mkdir(OUT_DIR, { recursive: true })
  const files = (await readdir(SRC_DIR)).filter((f) => /\.(png|jpe?g)$/i.test(f))

  if (files.length === 0) {
    console.log('Tidak ada gambar PNG/JPG di folder raw-images/.')
    return
  }

  let totalBefore = 0
  let totalAfter = 0

  for (const file of files) {
    const inPath = path.join(SRC_DIR, file)
    const outName = file.replace(/\.(png|jpe?g)$/i, '.webp')
    const outPath = path.join(OUT_DIR, outName)

    const before = (await stat(inPath)).size
    // Resize dulu, lalu pangkas strip bawah untuk membuang watermark.
    const resized = await sharp(inPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .toBuffer()
    const meta = await sharp(resized).metadata()
    const height = Math.max(1, meta.height - WATERMARK_CROP)
    await sharp(resized)
      .extract({ left: 0, top: 0, width: meta.width, height })
      .webp({ quality: QUALITY })
      .toFile(outPath)
    const after = (await stat(outPath)).size

    totalBefore += before
    totalAfter += after
    const saved = (100 * (1 - after / before)).toFixed(1)
    console.log(
      `${file.padEnd(32)} ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024).toFixed(0)} KB  (-${saved}%)`,
    )
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (-${(100 * (1 - totalAfter / totalBefore)).toFixed(1)}%)`,
  )
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
