import { describe, expect, test } from '@jest/globals';
import { addRational, append, endSegment, lastPair, length, listRef, makePoint, makeRational, makeSegment, multiplyRational, printPoint, printRational, startSegment } from './chapter2';
import { displayList, list } from './lib/list';

const oneHalf = makeRational(1, 2);
const oneThird = makeRational(1, 3);

describe('arithmetic operations for rational numbers', () => {
  test('print 1 / 2', () => {
    printRational(oneHalf);
  });

  test('1 / 2 + 1 / 3 = 5 / 6', () => {
    const sum = addRational(oneHalf, oneThird);
    expect(printRational(sum)).toBe('5 / 6');
  });

  test('(1 / 2) * (1 / 3) = 1 / 6', () => {
    const prod = multiplyRational(oneHalf, oneThird);
    expect(printRational(prod)).toBe('1 / 6');
  });

  test('(1 / 3) * (1 / 3) = 2 / 3', () => {
    const sum = addRational(oneThird, oneThird);
    expect(printRational(sum)).toBe('2 / 3');
  });

  test('1 / (-2) to -1 / 2', () => {
    expect(printRational(makeRational(1, -2))).toBe("-1 / 2");
  });

  test('(-1) / (-2) to 1 / 2', () => {
    expect(printRational(makeRational(-1, -2))).toBe("1 / 2");
  });
});

describe('line segments', () => {
  test('make point', () => {
    const p = makePoint(3, 4);
    expect(printPoint(p)).toBe('(3, 4)');
  });

  test('make segment', () => {
    const seg = makeSegment(makePoint(2, 3), makePoint(13, 18));
    const start = startSegment(seg);
    const end = endSegment(seg);
    expect(printPoint(start)).toBe('(2, 3)');
    expect(printPoint(end)).toBe('(13, 18)');
  });
});

describe('list operations', () => {
  test('get list item n', () => {
    const squares = list(1, 4, 9, 16, 25);
    expect(listRef(squares, 3)).toBe(16);
  });

  test('get list length', () => {
    const odds = list(1, 3, 5, 7);
    expect(length(odds)).toBe(4);
  });

  test('append list', () => {
    const squares = list(1, 4, 9, 16, 25);
    const odds = list(1, 3, 5, 7);

    expect(append(squares, odds)).toEqual([1, [4, [9, [16, [25, [1, [3, [5, [7, null]]]]]]]]]);
  });

  test('last pair', () => {
    const l = list(23, 72, 149, 34);
    const last = lastPair(l);
    expect(last).toEqual([34, null]);
    expect(displayList(last)).toBe('list(34)');
  });
});