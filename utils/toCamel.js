import { toUpper } from "./toUpper"

/**
 * Converts an array of words to camel case
 *
 * @param {Array} arr - An array of words
 *
 * @returns {string} - The camel cased string
 */
export const toCamel = arr => arr.reduce((a, b) => a + toUpper(b))
