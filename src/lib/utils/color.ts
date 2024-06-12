function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const bigint = parseInt(hex.slice(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function rgbToHex(r: number, g: number, b: number): string {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

function adjustColor(original: string, source: string, target: string): string {
  const originalRgb = hexToRgb(original);
  const sourceRgb = hexToRgb(source);
  const targetRgb = hexToRgb(target);

  const delta = {
    r: targetRgb.r - sourceRgb.r,
    g: targetRgb.g - sourceRgb.g,
    b: targetRgb.b - sourceRgb.b,
  };

  const newRgb = {
    r: Math.min(255, Math.max(0, originalRgb.r + delta.r)),
    g: Math.min(255, Math.max(0, originalRgb.g + delta.g)),
    b: Math.min(255, Math.max(0, originalRgb.b + delta.b)),
  };

  return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
}

export const lighten = (color: string) =>
  adjustColor("#ff8080", "#fd5f5f", color);
export const darken = (color: string) =>
  adjustColor("#7d3535", "#fd5f5f", color);
