const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *npm run test ./test/count-cats.test.js
 */
 function countCats(matrix) {
  let result = [].concat(...matrix);
  let count = 0;
  result.filter((item)=>{if(item === '^^'){return count++}})
  return count
}

module.exports = {
  countCats
};

// второе решение, тоже верное
/* 

function countCats(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]==='^^') {
        count +=1
      }    
    }
  }
  return count
}
countCats([
  ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
  [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
  [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
  [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
  [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
  [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
  [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
  [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
])
 */

 