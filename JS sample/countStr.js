function countStr(str) {
  return str.length;
}

const text =
  "I am in Cameroon and access to the technology industry is based on prior studies in the country's largest technology schools located in the two capitals of Douala and Yaoundé. However, these schools are reserved for people who are better off financially and whose future prospects are more or less clear. people from disadvantaged backgrounds such as myself, from the low or middle socioeconomic stratum who constitute nearly 80% of the population (as indicated in this article http://www.bucrep.cm/index.php/fr/censuses/3rd-rgph/results?id=138) must do to achieve this, for the more courageous and ambitious, extra efforts by going to seek free skills online and counting on luck to obtain a maintained potential; passion and work are not enough to be able to study in these schools and/or to obtain a job in the companies of the sector but only the diplomas of these large schools are authentic and justify your skills and your know-how.";

console.log(countStr(text));


function getNames(arr) {
    // return arr.map(obj => obj['name'])
    let res = []
    for(obj of arr) {
        if(obj.hasOwnProperty('name')) res.push(obj.name)
    }
    return res
}

const objArr = [
  { name: 'eric' },
  { name: 'johhn' },
  { a: 'eric' },
  { name: 'mel' },
  { d: 'eric' },
  { name: 'dan' },
  { y: 'eric' },
];
console.log(getNames(objArr));