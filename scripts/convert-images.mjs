import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, parse } from "path";

const SOURCE_DIR = "assets/photos";
const DEST_DIR = "public/assets/photos";
const MAX_SIZE_BYTES = 200 * 1024; // 200 KB
const QUALITY_START = 80;

// Ensure destination exists
if (!existsSync(DEST_DIR)) {
    mkdirSync(DEST_DIR, { recursive: true });
}

const files = readdirSync(SOURCE_DIR).filter(
    (f) => f.endsWith(".jpg") || f.endsWith(".jpeg")
);

console.log(`Found ${files.length} JPG files to convert.\n`);

for (const file of files) {
    const inputPath = join(SOURCE_DIR, file);
    const outputName = parse(file).name + ".webp";
    const outputPath = join(DEST_DIR, outputName);

    const metadata = await sharp(inputPath).metadata();
    console.log(`Converting: ${file} (${metadata.width}x${metadata.height})`);

    let quality = QUALITY_START;
    let result;

    // Try to hit under 200 KB by adjusting quality
    while (quality >= 10) {
        result = await sharp(inputPath)
            .webp({ quality, effort: 6 })
            .toBuffer();

        if (result.length <= MAX_SIZE_BYTES) {
            break;
        }
        quality -= 5;
    }

    await sharp(inputPath)
        .webp({ quality, effort: 6 })
        .toFile(outputPath);

    const finalSize = (result?.length ?? 0) / 1024;
    console.log(
        `  → ${outputName} (quality: ${quality}, size: ${finalSize.toFixed(1)} KB)`
    );
}

console.log("\n✅ All images converted successfully.");

// Also generate OG image (1200x630)
console.log("\nGenerating OG image...");
const ogWidth = 1200;
const ogHeight = 630;

// Create a warm-toned OG image with text using SVG overlay
const svgText = `
<svg width="${ogWidth}" height="${ogHeight}" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#C4956A;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#A67B5B;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="overlay" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#2C1810;stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:#2C1810;stop-opacity:0.6" />
        </linearGradient>
    </defs>
    <rect width="${ogWidth}" height="${ogHeight}" fill="url(#bg)" />
    <rect width="${ogWidth}" height="${ogHeight}" fill="url(#overlay)" />
    <text x="600" y="280" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="bold" fill="#F5E6D3" text-anchor="middle" letter-spacing="2">Le Fournil de Marie</text>
    <text x="600" y="350" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#D4B896" text-anchor="middle" letter-spacing="4">BOULANGERIE-PATISSERIE ARTISANALE BIO</text>
    <line x1="400" y1="390" x2="800" y2="390" stroke="#C4956A" stroke-width="2" />
    <text x="600" y="440" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#C4956A" text-anchor="middle" letter-spacing="2">NANTES CENTRE · FARINES LOCALES · LEVAIN NATUREL</text>
</svg>
`;

const ogBuffer = Buffer.from(svgText);

// Create a base image with the gradient and overlay the SVG
await sharp({
    create: {
        width: ogWidth,
        height: ogHeight,
        channels: 4,
        background: { r: 196, g: 149, b: 106, alpha: 1 },
    },
})
    .composite([
        {
            input: ogBuffer,
            top: 0,
            left: 0,
        },
    ])
    .jpeg({ quality: 90 })
    .toFile("public/og-image.jpg");

const ogStats = await sharp("public/og-image.jpg").metadata();
console.log(`  → og-image.jpg (${ogWidth}x${ogHeight}, ~${(ogStats.size ?? 0) / 1024} KB)`);

console.log("\n✅ OG image generated successfully.");