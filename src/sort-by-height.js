const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 * npm run test ./test/sort-by-height.test.js
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

}

module.exports = {
  sortByHeight
};


// решение верное
/* 
function sortByHeight(arr) {
  return arr.sort((a, b) => {
    if (a === -1 || b === -1) {
      return 0;
    }
    return a - b;
  });
}
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) */

//циклом проходился по массиву, сохранял индексы значений -1 потом сортировал массив. Потом добавлял -1 по нужным индексам. 