// Exercice 28 : Ajouter un champ "category" basé sur l'âge (enfant, adulte, senior)
const people = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 70 },
  { name: 'Eve', age: 40 },
];

function addAgeCategory(people) {
  return people.map((person) => ({
    ...person,
    category: person.age < 18 ? 'child' : person.age < 65 ? 'adult' : 'senior',
  }));
}

const categorizedPeople = addAgeCategory(people);
console.log(categorizedPeople);
// [
//   { name: "Alice", age: 10, category: "child" },
//   { name: "Bob", age: 20, category: "adult" },
//   { name: "Charlie", age: 35, category: "adult" },
//   { name: "David", age: 70, category: "senior" },
//   { name: "Eve", age: 40, category: "adult" }
// ]
