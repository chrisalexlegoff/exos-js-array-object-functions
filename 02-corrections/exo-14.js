// Exercice 14 : Ajouter un champ "isSenior" pour les personnes âgées de plus de 50 ans
const people = [
  { name: 'Alice', age: 60 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 55 },
  { name: 'David', age: 45 },
  { name: 'Eve', age: 70 },
];

function addIsSeniorField(people) {
  return people.map((person) => ({
    ...person,
    isSenior: person.age > 50,
  }));
}

const updatedPeople = addIsSeniorField(people);
console.log(updatedPeople);
// [
//   { name: "Alice", age: 60, isSenior: true },
//   { name: "Bob", age: 20, isSenior: false },
//   { name: "Charlie", age: 55, isSenior: true },
//   { name: "David", age: 45, isSenior: false },
//   { name: "Eve", age: 70, isSenior: true }
// ]
