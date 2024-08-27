// Exercice 35 : Ajouter un champ "isTeenager" indiquant si la personne est un adolescent (13-19 ans)
const people = [
  { name: 'Alice', age: 12 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 20 },
  { name: 'David', age: 15 },
  { name: 'Eve', age: 25 },
];

function addIsTeenagerField(people) {
  return people.map((person) => ({
    ...person,
    isTeenager: person.age >= 13 && person.age <= 19,
  }));
}

const updatedPeople = addIsTeenagerField(people);
console.log(updatedPeople);
// [
//   { name: "Alice", age: 12, isTeenager: false },
//   { name: "Bob", age: 17, isTeenager: true },
//   { name: "Charlie", age: 20, isTeenager: false },
//   { name: "David", age: 15, isTeenager: true },
//   { name: "Eve", age: 25, isTeenager: false }
// ]
