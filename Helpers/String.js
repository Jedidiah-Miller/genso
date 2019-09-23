// String helper functions

/**
 * check if the string is empty or if consists of only spaces
 * @param {String} str 
 */
export function isNullOrWhiteSpace(str) {
  return (!str || str.length === 0 || /^\s*$/.test(str))
}