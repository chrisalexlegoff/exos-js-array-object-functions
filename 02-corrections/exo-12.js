// Exercice 12 : Filtrer les personnes dont le nom commence par une lettre spécifique
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function filterNamesByInitial(people, initial) {
  return people.filter((person) => person.name.startsWith(initial));
}

const filteredPeople = filterNamesByInitial(people, 'A');
console.log(filteredPeople);
// [{ name: "Alice", age: 30 }]
