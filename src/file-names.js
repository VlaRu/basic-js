const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  
}

module.exports = {
  renameFiles
};

/* внутри мап можно сделать слайс массива перед текущим элементом и применить метод инклюд или фильтр, т.к. тебе надо не просто совпадение file найти, но и вдруг ты уже один file в file(1) переименовал, тогда текущему file надо 2 поставить, по кол-ву элементов что нашли перед ним */