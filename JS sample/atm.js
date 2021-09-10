function atm(total, denominations) {
  return denominations.reduce((denominationsHash, denomination) => {
    denominationsHash[denomination] = Math.floor(total / denomination);
    total -= Math.floor(total / denomination) * denomination;
    return denominationsHash;
  }, {});
}

console.log(atm(18475, [100, 20, 10, 5]));
console.log(atm(255, [20, 10, 5]));
console.log(atm(245, [5, 10, 15]));
