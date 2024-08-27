// Exercice 8 : Créer un tableau contenant uniquement les noms des personnes
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function getNames(people) {
  return people.map((person) => person.name);
}

const names = getNames(people);
console.log(names); // ["Alice", "Bob", "Charlie", "David", "Eve"]
