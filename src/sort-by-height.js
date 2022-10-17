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


// решение верное но не проходит тест
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

/* сравнение двух массивов и фильтрация
var  arr = ['google.com', 'vk.com', 'mail.ru']
var arr2 = ['facebook.com', 'google.com', 'vk.com', 'ya.ru', 'mail.ru']
arr2 = arr2.filter(e => !~arr.indexOf(e)); */

function sortByHeight(arr) {
  let arr2 = arr.sort((a,b)=> a-b).filter((item)=>item !== -1);
  console.log(arr2);
  let newArr = [];
  let newArr2 = arr2;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr.push([i])     
    }   
  } 
  for (let j = 0; j < newArr.length; j++) {
    newArr2.push(arr2.splice(newArr[j],-1))
  }
  console.log(newArr);  
  console.log(newArr2);  

}
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) 
//циклом проходился по массиву, сохранял индексы значений -1 потом сортировал массив. Потом добавлял -1 по нужным индексам. 

