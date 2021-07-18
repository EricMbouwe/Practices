const items = [
  { name: 'Rice', price: 5 },
  { name: 'Book', price: 20 },
  { name: 'Chicken', price: 10 },
  { name: 'Monitor', price: 100 },
];

const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);
console.log(totalPrice); // 135

// This can also be written as follows
const reducer = function (total, item) {
  return total + item.price;
};
const totalPrice = items.reduce(reducer, 0);
console.log(totalPrice); // 135

const people = [
  { name: 'Kyle', age: 26 },
  { name: 'John', age: 31 },
  { name: 'Sally', age: 42 },
  { name: 'Jill', age: 42 },
];

const peopleGroupedByAge = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if (groupedPeople[age] == null) groupedPeople[age] = [];
  groupedPeople[age].push(person);
  return groupedPeople;
}, {});
console.log(peopleGroupedByAge);
/*
  {
    26: [{ name: 'Kyle', age: 26 }],
    31: [{ name: 'John', age: 31 }],
    42: [
      { name: 'Sally', age: 42 },
      { name: 'Jill', age: 42 }
    ]
  }
*/
