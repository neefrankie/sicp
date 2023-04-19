import { describe, expect, test } from '@jest/globals';
import { addRational, makeRational, multiplyRational, printRational } from './chapter2';

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
});