import isArray from 'is-array-x';

/**
 * Casts value as an array if it's not one.
 *
 * @param {*} [value] - The value to inspect.
 * @returns {Array} Returns the cast array.
 */
const castArray = function castArray(value) {
  if (arguments.length === 0) {
    return [];
  }

  return isArray(value) ? value : [value];
};

export default castArray;
