// Exercice 9 : Compter le nombre de personnes adultes
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
  { name: 'Frank', age: 17 },
];

function countAdults(people) {
  return people.filter((person) => person.age >= 18).length;
}

const adultCount = countAdults(people);
console.log(adultCount); // 5
