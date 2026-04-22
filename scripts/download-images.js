const { mkdir, writeFile } = require("fs/promises")
const { join } = require("path")

const OUTPUT_DIR = join(process.cwd(), "public", "images", "procedimentos")

const images = [
  {
    name: "clinic-tools.jpg",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  },
  {
    name: "skincare-tools.jpg",
    url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
  },
  {
    name: "filler-syringe.jpg",
    url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
  },
  {
    name: "dental-veneers.jpg",
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800",
  },
  {
    name: "hifu-device.jpg",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  },
  {
    name: "teeth-whitening.jpg",
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800",
  },
]

async function downloadImages() {
  await mkdir(OUTPUT_DIR, { recursive: true })
  console.log(`[v0] Output directory ready: ${OUTPUT_DIR}`)

  for (const image of images) {
    try {
      console.log(`[v0] Downloading ${image.name} from ${image.url}`)
      const response = await fetch(image.url)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const buffer = await response.arrayBuffer()
      const dest = join(OUTPUT_DIR, image.name)
      await writeFile(dest, Buffer.from(buffer))
      console.log(`[v0] Saved ${image.name} (${Math.round(buffer.byteLength / 1024)} KB)`)
    } catch (err) {
      console.error(`[v0] Failed to download ${image.name}:`, err.message)
    }
  }
  console.log("[v0] All images downloaded.")
}

downloadImages()
