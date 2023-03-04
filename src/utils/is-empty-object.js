export function isEmptyO(obj) {
  if (!obj) return false
  return !!Object.keys(obj).length
}