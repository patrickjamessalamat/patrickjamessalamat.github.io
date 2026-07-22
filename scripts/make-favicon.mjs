// Generates the favicon, the iOS home-screen icon, and the social share card
// from the profile photo. Runs automatically before dev/build (see predev and
// prebuild in package.json), so replacing public/images/profile.png refreshes
// all three. Every output is gitignored and rebuilt on each run.
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const SRC = 'public/images/profile.png';

// The script is plain Node and cannot import the TypeScript data files, so the
// few strings the share card needs are read straight out of the source.
const read = (file, key) =>
  readFileSync(file, 'utf8').match(new RegExp(`${key}:\\s*'([^']*)'`))?.[1] ?? '';

const name = read('src/data/site.ts', 'name');
const role = read('src/data/site.ts', 'role');
const siteUrl = read('astro.config.mjs', 'site').replace(/^https?:\/\//, '');

const escapeXml = (text) =>
  text.replace(/[<>&'"]/g, (c) => `&${{ '<': 'lt', '>': 'gt', '&': 'amp', "'": 'apos', '"': 'quot' }[c]};`);

// Centre-crop the photo to a square once; every output derives from it.
const image = sharp(SRC);
const { width, height } = await image.metadata();
const side = Math.min(width, height);
const square = await image
  .extract({
    left: Math.floor((width - side) / 2),
    top: Math.floor((height - side) / 2),
    width: side,
    height: side,
  })
  .toBuffer();

const circle = (size) =>
  Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );

// 1. Favicon — small circular crop.
const FAVICON_SIZE = 64;
await sharp(square)
  .resize(FAVICON_SIZE, FAVICON_SIZE)
  .composite([{ input: circle(FAVICON_SIZE), blend: 'dest-in' }])
  .png()
  .toFile('public/favicon.png');

// 2. iOS home-screen icon — square and opaque, because iOS rounds the corners
//    itself and renders transparency as black.
const TOUCH_SIZE = 180;
await sharp(square)
  .resize(TOUCH_SIZE, TOUCH_SIZE)
  .flatten({ background: '#0d1117' })
  .png()
  .toFile('public/apple-touch-icon.png');

// 3. Social share card at the 1.91:1 ratio Open Graph expects.
const OG_W = 1200;
const OG_H = 630;
const AVATAR = 280;

const avatar = await sharp(square)
  .resize(AVATAR, AVATAR)
  .composite([{ input: circle(AVATAR), blend: 'dest-in' }])
  .png()
  .toBuffer();

const fonts = 'DejaVu Sans, Liberation Sans, Segoe UI, Helvetica, Arial, sans-serif';
const card = Buffer.from(`
<svg width="${OG_W}" height="${OG_H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${OG_W}" height="${OG_H}" fill="#0d1117"/>
  <rect width="${OG_W}" height="8" fill="#58a6ff"/>
  <text x="480" y="270" font-family="${fonts}" font-size="66" font-weight="700" fill="#e6edf3">${escapeXml(name)}</text>
  <text x="480" y="335" font-family="${fonts}" font-size="34" fill="#8b949e">${escapeXml(role)}</text>
  <text x="480" y="410" font-family="${fonts}" font-size="28" fill="#58a6ff">${escapeXml(siteUrl)}</text>
</svg>
`);

await sharp(card)
  .composite([{ input: avatar, left: 120, top: Math.round((OG_H - AVATAR) / 2) }])
  .png()
  .toFile('public/og.png');

console.log(`images: ${SRC} -> favicon.png, apple-touch-icon.png, og.png (${OG_W}x${OG_H})`);
