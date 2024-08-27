// Exercice 17 : Vérifier si toutes les personnes dans un tableau sont adultes
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 17 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function areAllAdults(people) {
  return people.every((person) => person.age >= 18);
}

const allAdults = areAllAdults(people);
console.log(allAdults); // false
