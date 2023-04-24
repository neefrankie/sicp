import { test, expect} from '@jest/globals';
import { pair, head, tail, displayPair, list, displayList } from './list';

test('build pair', () => {
  expect(pair(1, 2)).toStrictEqual([1, 2]);
});

test('head', () => {
  expect(head(pair(1, 2))).toBe(1);
});

test('tail', () => {
  expect(tail(pair(1, 2))).toBe(2);
});

test('display pair', () => {
  const p = pair(1, 2);
  expect(displayPair(p)).toBe('[1, 2]');
});

test('display list', () => {
  const l = list(1, 2, 3, 4);
  expect(displayList(l)).toBe('list(1, 2, 3, 4)');

  const nested = list(1, pair(2, 3), 4, 5);
  expect(displayList(nested)).toBe('list(1, [2, 3], 4, 5)');
});