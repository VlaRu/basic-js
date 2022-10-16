const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 * npm run test ./test/get-email-domain.test.js
 */

function getEmailDomain(email) {
  const foundIndex = email.lastIndexOf("@");
  const getEmail = email.substring(foundIndex + 1);
  return getEmail
}

module.exports = {
  getEmailDomain
};
