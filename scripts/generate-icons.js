const fs = require('fs');
const { createCanvas } = require('canvas');

// Icon sizes to generate
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
];

function generateIcon(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#1f2937');
  gradient.addColorStop(1, '#374151');

  // Draw rounded rectangle background
  const radius = size * 0.2;
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, radius);
  ctx.fill();

  // Draw text
  ctx.fillStyle = '#f9fafb';
  ctx.font = `bold ${size * 0.4}px Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MP', size / 2, size / 2);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/${filename}`, buffer);
  console.log(`Generated: ${filename} (${size}x${size})`);
}

// Generate all icons
console.log('Generating icons...');
sizes.forEach(({ size, name }) => {
  generateIcon(size, name);
});
console.log('✅ All icons generated successfully!');

// Also generate favicon.ico (just copy the 32x32 version)
fs.copyFileSync('public/favicon-32x32.png', 'public/favicon.ico');
console.log('✅ favicon.ico created!');
