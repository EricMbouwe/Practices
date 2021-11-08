function passwordStrength(password) {
  let counter = 0;
  let subsArray = [];

  // get an array of all the substr of the string input
  let i, j;
  for (i = 0; i < password.length; i++) {
    for (j = i + 1; j < password.length + 1; j++) {
      subsArray.push(password.slice(i, j));
    }
  }

  // sanitize subs and remove duplicates char
  const uniques = subsArray.map(str => [...new Set(str)].join(''))

  // iterate the subs and increment the counter
  uniques.forEach(str => counter += str.length)
  
  return counter;
}

const str1 = 'good'; // 16
const str2 = 'test'; // 19

console.log(passwordStrength(str1));
console.log(passwordStrength(str2));