import { gcd } from './chapter1';
import { Pair, head, pair, tail } from './lib/list';

export function makeRational(n: number, d: number): Pair<number> {
  const g = gcd(n, d)
  return pair(n / g, d / g);
}

function numerator(x: Pair<number>): number {
  return head(x);
}

function denominator(y: Pair<number>): number {
  return tail(y);
}

export function addRational(x: Pair<number>, y: Pair<number>): Pair<number> {
  return makeRational(
    numerator(x) * denominator(y) + numerator(y) * denominator(x),
    denominator(x) * denominator(y)
  );
}

export function substractRational(x: Pair<number>, y: Pair<number>): Pair<number> {
  return makeRational(
    numerator(x) * denominator(y) - numerator(y) * denominator(x),
    denominator(x) * denominator(y)
  );
}

export function multiplyRational(x: Pair<number>, y: Pair<number>) {
  return makeRational(
    numerator(x) * numerator(y),
    denominator(x) * denominator(y)
  );
}

export function divideRational(x: Pair<number>, y: Pair<number>) {
  return makeRational(
    numerator(x) * denominator(y),
    denominator(x) * numerator(y)
  );
}

export function equalRational(x: Pair<number>, y: Pair<number>) {
  return numerator(x) * denominator(y) === numerator(y) * denominator(x);
}

export function printRational(x: Pair<number>) {
  return `${numerator(x)} / ${denominator(x)}`;
}
