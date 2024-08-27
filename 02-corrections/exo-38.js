// Exercice 38 : Trouver les personnes ayant un âge pair
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 34 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function findPeopleWithEvenAge(people) {
  return people.filter((person) => person.age % 2 === 0);
}

const evenAgedPeople = findPeopleWithEvenAge(people);
console.log(evenAgedPeople);
// [{ name: "Alice", age: 30 }, { name: "Charlie", age: 34 }, { name: "Eve", age: 40 }]
