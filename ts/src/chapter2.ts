import { Pair, head, pair, tail } from './lib/list';

function makeRational(n: number, d: number): Pair<number> {
  return pair(n, d);
}

function numerator(x: Pair<number>): number {
  return head(x);
}

function denominator(y: Pair<number>): number {
  return tail(y);
}

function addRational(x: Pair<number>, y: Pair<number>): Pair<number> {
  return makeRational(
    numerator(x) * denominator(y) + numerator(y) * denominator(x),
    denominator(x) * denominator(y)
  );
}

function substractRational(x: Pair<number>, y: Pair<number>): Pair<number> {
  return makeRational(
    numerator(x) * denominator(y) - numerator(y) * denominator(x),
    denominator(x) * denominator(y)
  );
}

function multiplyRational(x: Pair<number>, y: Pair<number>) {
  return makeRational(
    numerator(x) * numerator(y),
    denominator(x) * denominator(y)
  );
}

function divideRational(x: Pair<number>, y: Pair<number>) {
  return makeRational(
    numerator(x) * denominator(y),
    denominator(x) * numerator(y)
  );
}

function equalRational(x: Pair<number>, y: Pair<number>) {
  return numerator(x) * denominator(y) === numerator(y) * denominator(x);
}

function printRational(x: Pair<number>) {
  return console.log(JSON.stringify(numerator(x)) + " / " + JSON.stringify(denominator(x)));
}

if (require.main == module) {
  const oneHalf = makeRational(1, 2);
  printRational(oneHalf);

  const oneThird = makeRational(1, 3);
  printRational(addRational(oneHalf, oneThird));
}