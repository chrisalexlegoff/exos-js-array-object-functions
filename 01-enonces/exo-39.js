// Exercice 39 : Ajouter un champ "canVote" indiquant si la personne peut voter (âge >= 18)
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// votre code ici .... //

// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 17, canVote: false },
//   { name: "Bob", age: 20, canVote: true },
//   { name: "Charlie", age: 16, canVote: false },
//   { name: "David", age: 25, canVote: true },
//   { name: "Eve", age: 40, canVote: true }
// ]
