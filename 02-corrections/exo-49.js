// Exercice 49 : Filtrer les personnes en âge de travailler
const people = [
  { name: 'Alice', age: 15, isWorkingAge: false },
  { name: 'Bob', age: 20, isWorkingAge: true },
  { name: 'Charlie', age: 22, isWorkingAge: true },
  { name: 'David', age: 70, isWorkingAge: false },
  { name: 'Eve', age: 65, isWorkingAge: true },
];

function filterWorkingAge(people) {
  return people.filter((person) => person.isWorkingAge);
}

const workingAgePeople = filterWorkingAge(people);
console.log(workingAgePeople);
// [
//   { name: "Bob", age: 20, isWorkingAge: true },
//   { name: "Charlie", age: 22, isWorkingAge: true },
//   { name: "Eve", age: 65, isWorkingAge: true }
// ]
