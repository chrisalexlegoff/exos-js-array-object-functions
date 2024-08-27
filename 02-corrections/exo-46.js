// Exercice 46 : Ajouter un champ "canRentCar" indiquant si la personne peut louer une voiture (âge >= 21)
const people = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 22 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 18 },
];

function addCanRentCarField(people) {
  return people.map((person) => ({
    ...person,
    canRentCar: person.age >= 21,
  }));
}

const updatedPeople = addCanRentCarField(people);
console.log(updatedPeople);
// [
//   { name: "Alice", age: 15, canRentCar: false },
//   { name: "Bob", age: 20, canRentCar: false },
//   { name: "Charlie", age: 22, canRentCar: true },
//   { name: "David", age: 25, canRentCar: true },
//   { name: "Eve", age: 18, canRentCar: false }
// ]
