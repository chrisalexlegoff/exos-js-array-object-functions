// Exercice 32 : Ajouter un champ "initial" représentant la première lettre du nom
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function addInitialField(people) {
  return people.map((person) => ({
    ...person,
    initial: person.name[0],
  }));
}

const updatedPeople = addInitialField(people);
console.log(updatedPeople);
// [
//   { name: "Alice", age: 30, initial: "A" },
//   { name: "Bob", age: 20, initial: "B" },
//   { name: "Charlie", age: 35, initial: "C" },
//   { name: "David", age: 25, initial: "D" },
//   { name: "Eve", age: 40, initial: "E" }
// ]
