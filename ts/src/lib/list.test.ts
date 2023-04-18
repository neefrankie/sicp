import { test, expect} from '@jest/globals';
import { pair, head, tail } from './list';

test('build pair', () => {
  expect(pair(1, 2)).toStrictEqual([1, 2]);
});

test('head', () => {
  expect(head(pair(1, 2))).toBe(1);
});

test('tail', () => {
  expect(tail(pair(1, 2))).toBe(2);
})