// Exercice 5 : Ajouter un nouveau champ "isAdult" à chaque objet indiquant si la personne est adulte (18 ans et plus)
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// Emile
// const updatedPeople = people.map((person) => {
//   person.isAdult = person.age >= 18;
//   return person;
// });

// Adrien
// const updatedPeople = people.map((personne) => {
//   return { ...personne, isAdult: personne.age >= 18 };
// });

// Frédéric
const updatedPeople = people.map((major) => ({
  ...major,
  isAdult: major.age >= 18,
}));

// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 30, isAdult: true },
//   { name: "Bob", age: 20, isAdult: true },
//   { name: "Charlie", age: 35, isAdult: true },
//   { name: "David", age: 25, isAdult: true },
//   { name: "Eve", age: 40, isAdult: true }
// ]
