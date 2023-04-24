export type Pair<H, T> = [H, T];
type NonEmptyList = Pair<any, any>;
export type List = null | NonEmptyList;

export function pair<H, T>(first: H, second: T): Pair<H, T> {
  return [first, second];
}

function is_pair<T>(x: any): boolean {
  return Array.isArray(x) && x.length === 2;
}

export function head<H, T>(p: Pair<H, T>): H {
  if (is_pair(p)) {
    return p[0];
  }

  throw new Error('head(pair) expects a pair as argument pair, but encountered ' + JSON.stringify(p));
}

export function tail<H, T>(p: Pair<H, T>): T {
  if (is_pair(p)) {
    return p[1];
  }

  throw new Error('tail(pair) expects a pair as argument pair, but encountered ' + JSON.stringify(p));
}
