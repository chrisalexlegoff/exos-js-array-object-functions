// Exercice 33 : Filtrer les personnes dont le nom contient plus de 4 lettres
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function filterByNameLength(people, length) {
  return people.filter((person) => person.name.length > length);
}

const longNames = filterByNameLength(people, 4);
console.log(longNames);
// [{ name: "Alice", age: 30 }, { name: "Charlie", age: 35 }, { name: "David", age: 25 }]
