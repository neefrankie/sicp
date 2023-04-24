import { gcd } from './chapter1';
import { List, Pair, head, isNull, pair, tail } from './lib/list';

export function makeRational(n: number, d: number): Pair<number, number> {
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

function numerator(x: Pair<number, number>): number {
  return head(x);
}

function denominator(y: Pair<number, number>): number {
  return tail(y);
}

export function addRational(x: Pair<number, number>, y: Pair<number, number>): Pair<number, number> {
  return makeRational(
    numerator(x) * denominator(y) + numerator(y) * denominator(x),
    denominator(x) * denominator(y)
  );
}

export function substractRational(x: Pair<number, number>, y: Pair<number, number>): Pair<number, number> {
  return makeRational(
    numerator(x) * denominator(y) - numerator(y) * denominator(x),
    denominator(x) * denominator(y)
  );
}

export function multiplyRational(x: Pair<number, number>, y: Pair<number, number>) {
  return makeRational(
    numerator(x) * numerator(y),
    denominator(x) * denominator(y)
  );
}

export function divideRational(x: Pair<number, number>, y: Pair<number, number>) {
  return makeRational(
    numerator(x) * denominator(y),
    denominator(x) * numerator(y)
  );
}

export function equalRational(x: Pair<number, number>, y: Pair<number, number>) {
  return numerator(x) * denominator(y) === numerator(y) * denominator(x);
}

export function printRational(x: Pair<number, number>) {
  return `${numerator(x)} / ${denominator(x)}`;
}

/**
 * Exercise 2.2
 */

// A point can be represented as a pair of numbers:
// the x coordinates and the y cooridinates
type Point = Pair<number, number>;

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
type Segment = Pair<Point, Point>;

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
type Rect1 = Pair<Point, Point>;
// Another representation of rectangle by four points.
// Two segment for width and height respectively.
type Rect2 = Pair<Segment, Segment>;

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

/** Exercise 2.7 */

type Interval = Pair<number, number>

function makeInterval(x: number, y: number): Interval {
  return pair(x, y);
}

function upperBound(p: Interval): number {
  return head(p);
}

function lowerBound(p: Interval): number {
  return tail(p)
}

function addInterval(x: Interval, y: Interval): Interval {
  return makeInterval(
    lowerBound(x) + lowerBound(y),
    upperBound(x) + upperBound(y),
  );
}

function subInterval(x: Interval, y: Interval): Interval {
  return makeInterval(
    abs(lowerBound(x) - lowerBound(y)),
    abs(upperBound(x) - upperBound(y)),
  )
}

function mulInterval(x: Interval, y: Interval): Interval {
  const p1 = lowerBound(x) * lowerBound(y);
  const p2 = lowerBound(x) * upperBound(y);
  const p3 = upperBound(x) * lowerBound(y);
  const p4 = upperBound(x) * upperBound(y);

  return makeInterval(Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4));
}

function divInterval(x: Interval, y: Interval): Interval {
  return mulInterval(
    x,
    makeInterval(1 / upperBound(y), 1 / lowerBound(y)),
  );
}

export function listRef<T>(items: List, n: number): T {
  return n == 0
    ? head(items)
    : listRef(tail(items), n - 1);
}

export function length(items: List): number {
  return isNull(items)
    ? 0
    : 1 + length(tail(items));
}

export function append(list1: List, list2: List): List {
  return isNull(list1)
    ? list2
    : pair(head(list1), append(tail(list1), list2));
}

// Returns the list that contains only the last element of a given (nonempty) list:
export function lastPair(items: List): List {
  return isNull(tail(items))
    ? items
    : lastPair(tail(items));
}