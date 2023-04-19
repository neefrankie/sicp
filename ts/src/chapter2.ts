import { gcd } from './chapter1';
import { Pair, head, pair, tail } from './lib/list';

export function makeRational(n: number, d: number): Pair<number> {
  const g = gcd(n, d);
  n = n / g;
  d = d / g;

  // Normalize sign.
  // Leave n as is.
  // Exercise 2.1
  if (d > 0) {
    return pair(n, d);
  }

  // Two cases left:
  // d is negative and n is positive, exchange their signs;
  // d is negative and n is negative, remove minus sign.
  return pair(-n, -d);
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

/**
 * Exercise 2.2
 */

// A point can be represented as a pair of numbers:
// the x coordinates and the y cooridinates
type Point = Pair<number>;

export function makePoint(x: number, y: number): Point {
  return pair(x, y);
}

function xPoint(p: Point): number {
  return head(p);
}

function yPoint(p: Point): number {
  return tail(p);
}

export function printPoint(p: Point): string {
  return `(${xPoint(p)}, ${yPoint(p)})`;
}

// A segement is reprsented as a pair of points:
// a starting point and and ending point.
type Segment = Pair<Point>;

export function makeSegment(s: Point, e: Point): Segment {
  return pair(s, e)
}

export function startSegment(s: Segment): Point {
  return head(s);
}

export function endSegment(s: Segment): Point {
  return tail(s);
}