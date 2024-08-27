// Exercice 6 : Trouver les noms des personnes qui sont adultes
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
  { name: 'Frank', age: 17 },
];
function findAdultNames(people) {
  return people.filter((person) => person.age >= 18).map((person) => person.name);
}

const adultNames = findAdultNames(people);
console.log(adultNames); // ["Alice", "Bob", "Charlie", "David", "Eve"]
