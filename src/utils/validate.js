/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  const valid_map = ['admin', 'sunkang']
  return valid_map.indexOf(str.trim()) >= 0
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}