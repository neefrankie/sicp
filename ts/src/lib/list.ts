export type Pair<H, T> = [H, T];
type NonEmptyList = Pair<any, any>;
export type List = null | NonEmptyList;

export function pair<H, T>(first: H, second: T): Pair<H, T> {
  return [first, second];
}

function isPair<T>(x: any): boolean {
  return Array.isArray(x) && x.length === 2;
}

export function displayPair(x: any): string {
  if (isPair(x)) {
    return `[${x[0]}, ${x[1]}]`;
  }

  throw new Error('epecting pair, but got ' + JSON.stringify(x));
}

export function head(x: any) {
  if (isPair(x)) {
    return x[0];
  }

  throw new Error('head(pair) expects a pair as argument pair, but encountered ' + JSON.stringify(x));
}

export function tail(x: any) {
  if (isPair(x)) {
    return x[1];
  }

  throw new Error('tail(pair) expects a pair as argument pair, but encountered ' + JSON.stringify(x));
}

export function isNull(x: List): boolean {
  return x === null;
}

export function list<T>(...elements: any[]): List {
  let list = null;
  for (let i = elements.length - 1; i >= 0; i -= 1) {
    list = pair(elements[i], list);
  }

  return list;
}

export function isList(x: List): boolean {
  while (isPair(x)) {
    x = tail(x);
  }

  return isNull(x);
}

export function displayList(x: List): string {
  let s = 'list(';
  while (isPair(x)) {
    const h = head(x);
    s += isList(h)
      ? displayList(h)
      : (isPair(h) ? displayPair(h) : JSON.stringify(h));
    
    x = tail(x);
    s += isNull(x)
      ? ''
      : ', '
  }

  s += ')';

  return s;
}

