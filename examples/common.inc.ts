import 'colors';

export const observerA = {
  next:       v => console.log('[A] Next:'.cyan, v),
  error:    err => console.log('[A] Error'.cyan, err),
  complete:  () => console.log('[A] Done'.cyan),
};

export const observerB = {
  next:       v => console.log('[B] Next:'.blue, v),
  error:    err => console.log('[B] Error:'.blue, err),
  complete:  () => console.log('[B] Done'.blue),
};

export const observerC = {
  next:       v => console.log('[C] Next:'.yellow, v),
  error:    err => console.log('[C] Error:'.yellow, err),
  complete:  () => console.log('[C] Done'.yellow),
};

export const observerD = {
  next:       v => console.log('[D] Next:'.green, v),
  error:    err => console.log('[D] Error:'.green, err),
  complete:  () => console.log('[D] Done'.green),
};

export function log(...args) {
  // const colorized = args.map(arg => typeof arg === 'string' ? arg.underline : arg);
  const colorized = args;
  console.log(...colorized);
}

console.clear();
