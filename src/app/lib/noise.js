export function createNoiseTexture(w, h) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(w, h);

  for (let i = 0; i < w * h; i++) {
    const val = (Math.random() * 255) | 0;
    imageData.data[i * 4] = val;
    imageData.data[i * 4 + 1] = val;
    imageData.data[i * 4 + 2] = val;
    imageData.data[i * 4 + 3] = 10; // very transparent
  }

  return imageData;
}
