// Exercice 7 : Trier les personnes par ordre croissant d'âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function sortByAge(people) {
  return people.slice().sort((a, b) => a.age - b.age);
}

const sortedPeople = sortByAge(people);
console.log(sortedPeople);
// [
//   { name: "Bob", age: 20 },
//   { name: "David", age: 25 },
//   { name: "Alice", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Eve", age: 40 }
// ]
