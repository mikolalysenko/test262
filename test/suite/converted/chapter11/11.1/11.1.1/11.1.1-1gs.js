

/**
 * @path chapter11/11.1/11.1.1/11.1.1-1gs.js
 * @description Strict Mode - 'this' object at the global scope is not undefined
 * @strictOnly
 */


if (this===undefined) {
    throw NotEarlyError;
}
