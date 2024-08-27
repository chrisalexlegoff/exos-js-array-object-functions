// Exercice 23 : Ajouter un champ "birthYear" basé sur l'âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

const currentYear = new Date().getFullYear();

function addBirthYearField(people) {
  return people.map((person) => ({
    ...person,
    birthYear: currentYear - person.age,
  }));
}

const updatedPeople = addBirthYearField(people);
console.log(updatedPeople);
// [
//   { name: "Alice", age: 30, birthYear: 1994 },
//   { name: "Bob", age: 20, birthYear: 2004 },
//   { name: "Charlie", age: 35, birthYear: 1989 },
//   { name: "David", age: 25, birthYear: 1999 },
//   { name: "Eve", age: 40, birthYear: 1984 }
// ]
