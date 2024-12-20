/**
 * Converts the first character of a string to uppercase
 *
 * @param {string} str - The input string
 *
 * @returns {string} - The string with the first character in uppercase
 */
export const toUpper = str => str.charAt(0).toUpperCase() + str.slice(1)
