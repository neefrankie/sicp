export type Pair<T> = [T, T];

export function pair<T>(first: T, second: T): Pair<T> {
  return [first, second];
}

function is_pair<T>(x: Pair<T>): boolean {
  return Array.isArray(x) && x.length === 2;
}

export function head<T>(p: Pair<T>): T {
  if (is_pair(p)) {
    return p[0];
  }

  throw new Error('head(pair) expects a pair as argument pair, but encountered ' + JSON.stringify(p));
}

export function tail<T>(p: Pair<T>): T {
  if (is_pair(p)) {
    return p[1];
  }

  throw new Error('tail(pair) expects a pair as argument pair, but encountered ' + JSON.stringify(p));
}
