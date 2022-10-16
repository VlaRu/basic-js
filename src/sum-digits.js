const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 * npm run test ./test/sum-digits.test.js
 */
function getSumOfDigits(n) {
  let array = Array.from(n.toString(), Number)
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue);
  if(sumWithInitial>9){
    return getSumOfDigits(sumWithInitial)
  }else return sumWithInitial
}

module.exports = {
  getSumOfDigits
};


//первое решение правельное
/* 
function getSumOfDigits(n) {
  let number = Array.from(n.toString(), Number); 
  const sumWithInitial = number.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  if(sumWithInitial>9){
    getSumOfDigits(sumWithInitial)
  }else console.log(sumWithInitial);
}
getSumOfDigits(195)
 */


// второе решение

/* function getSumOfDigits(n) {
  let number = String(n).split(''); 
  let sum =0;
    for (let i = 0; i < number.length; i++) {
      sum = sum + Number(number[i])
    }
    if(sum>9){
      getSumOfDigits(sum)
    }else console.log(sum);
    
}
getSumOfDigits(195) */