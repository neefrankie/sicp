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

/**
 * Exercise 2.3
 */

function abs(x: number): number {
  if (x < 0) {
    return -x;
  }

  return x;
}
// A representation of rectagnle by listing two
// diagonal points.
type Rect1 = Pair<Point>;
// Another representation of rectangle by four points.
// Two segment for width and height respectively.
type Rect2 = Pair<Segment>;

function makeRectDiagonal(a: Point, b: Point): Rect1 {
  return pair(a, b);
}

function widthRect(r: Rect1): number {
  const pointA = head(r);
  const pointB = tail(r);
  const xA = xPoint(pointA);
  const xB = xPoint(pointB)
  return abs(xB - xA);
}

function heightRect(r: Rect1): number {
  const pointA = head(r);
  const pointB = tail(r);
  const yA = yPoint(pointA);
  const yB = yPoint(pointB);
  return abs(yB - yA);
}

function perimRect(r: Rect1): number {
  const w = widthRect(r);
  const h = heightRect(r);
  return 2 * (w + h);
}

function areaRect(r: Rect1): number {
  const w = widthRect(r);
  const h = heightRect(r);

  return w * h;
}

function makeRectSeg(a: Point, b: Point): Rect2 {
  const p = makePoint(head(a), tail(b));
  const wSeg = makeSegment(a, p);
  const hSeg = makeSegment(p, b)
  return pair(wSeg, hSeg);
}

/** pair implementation without any data structure */
type PairFunc<T> = (m: number) => T;

function pair1<T>(x: T, y: T): PairFunc<T> {
  function dispatch(m: number) {
    return m === 0
      ? x
      : (m === 1 ? y : y);
  }

  return dispatch;
}

function head1<T>(z: PairFunc<T>): T {
  return z(0);
}

function tail2<T>(z: PairFunc<T>): T {
  return z(1);
}

function pair2<T>(x: T, y: T) {
  
  return function (m: (a: T, b: T) => T): T {
    return m(x, y)
  }
}