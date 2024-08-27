// Exercice 48 : Ajouter un champ "isWorkingAge" indiquant si la personne est en âge de travailler (18-65 ans)
const people = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 22 },
  { name: 'David', age: 70 },
  { name: 'Eve', age: 65 },
];

function addIsWorkingAgeField(people) {
  return people.map((person) => ({
    ...person,
    isWorkingAge: person.age >= 18 && person.age <= 65,
  }));
}

const updatedPeople = addIsWorkingAgeField(people);
console.log(updatedPeople);
// [
//   { name: "Alice", age: 15, isWorkingAge: false },
//   { name: "Bob", age: 20, isWorkingAge: true },
//   { name: "Charlie", age: 22, isWorkingAge: true },
//   { name: "David", age: 70, isWorkingAge: false },
//   { name: "Eve", age: 65, isWorkingAge: true }
// ]
