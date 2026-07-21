// Generates a circular favicon from the profile photo. Runs automatically
// before dev/build (see predev/prebuild in package.json), so replacing
// public/images/profile.png is all it takes to update the favicon too.
import sharp from 'sharp';

const SRC = 'public/images/profile.png';
const OUT = 'public/favicon.png';
const SIZE = 64;

const image = sharp(SRC);
const { width, height } = await image.metadata();
const side = Math.min(width, height);

const circleMask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="#fff"/></svg>`
);

await image
  .extract({
    left: Math.floor((width - side) / 2),
    top: Math.floor((height - side) / 2),
    width: side,
    height: side,
  })
  .resize(SIZE, SIZE)
  .composite([{ input: circleMask, blend: 'dest-in' }])
  .png()
  .toFile(OUT);

console.log(`favicon: ${SRC} -> ${OUT} (${SIZE}px circle)`);
