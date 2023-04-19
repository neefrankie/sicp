function square(x: number): number {
  return x * x;
}

function sumOfSquares(x: number, y: number): number {
  return square(x) + square(x);
}

export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}