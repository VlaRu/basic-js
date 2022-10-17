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
 *
 */
function countCats(matrix) {
  
}

module.exports = {
  countCats
};


function countCats(matrix) {
  let result = [].concat(matrix[0],matrix[1],matrix[2]);
  console.log(result);
  let count = [];
  count.push(result.filter((item)=>{if(item === '^^'){return item}}))
  return count
}

countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
 ])


