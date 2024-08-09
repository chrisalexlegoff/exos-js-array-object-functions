// Exercice 42 : Ajouter un champ "votingEligibility" indiquant "minor", "adult", "senior"
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 65 },
];

// votre code ici .... //

// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 17, votingEligibility: "minor" },
//   { name: "Bob", age: 20, votingEligibility: "adult" },
//   { name: "Charlie", age: 16, votingEligibility: "minor" },
//   { name: "David", age: 25, votingEligibility: "adult" },
//   { name: "Eve", age: 65, votingEligibility: "senior" }
// ]
