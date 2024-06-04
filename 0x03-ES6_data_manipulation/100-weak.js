export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const load = weakMap.get(endpoint) || 0;

  weakMap.set(endpoint, load + 1);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
