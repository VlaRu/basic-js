const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *npm run test ./test/dream-team.test.js
 */

//

 function createDreamTeam(members) {
  let newMember = [];
  let encryptedName = "";
  if (Array.isArray(members) && members.length > 0) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        
        members[i] = members[i].split(" ").join('').toUpperCase()
        newMember.push(members[i])
        newMember.sort()     
      }    
    }
    for (let k = 0; k < newMember.length; k++) {
      encryptedName += newMember[k].slice(0,1)
    }
    return encryptedName;
  }else{
    return false
  }
}
createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
])
//, 'BDETV'

/* function createDreamTeam(members) {
  let name = [];

  for (let elem of Object.values(members)) {
    if (typeof(elem)=='string') {
      elem = elem.split(" ").join('');      
      name.push(elem[0].toUpperCase())
    }
    
  }
  name = name.sort()
  return name.join('')
} */

module.exports = {
  createDreamTeam
};


//второй метод

/* function createDreamTeam(members) {
  let name = [];

  for (let elem of Object.values(members)) {
    if (typeof(elem)=='string') {
      elem = elem.split(" ").join('');
      console.log(elem);
      
      name.push(elem[0].toUpperCase())
    }
    
  }
  name = name.sort()
  return name.join('')
}
createDreamTeam([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
]) */