import sharp from 'sharp';
import fs from 'fs';

const svgBuffer = fs.readFileSync('./public/favicon.svg');
const outputSizes = [
  [32, './public/favicon-32x32.png'],
  [64, './public/favicon-64x64.png'],
  [128, './public/favicon-128x128.png'],
  [180, './public/apple-touch-icon.png'],
];

async function generateFavicons() {
  try {
    await Promise.all(
      outputSizes.map(async ([size, filePath]) => {
        await sharp(svgBuffer)
          .resize(size, size)
          .png()
          .toFile(filePath);

        console.log(`✓ Icono ${size}x${size} generado`);
      }),
    );
  } catch (error) {
    console.error('Error generando iconos:', error);
    process.exitCode = 1;
  }
}

generateFavicons();
