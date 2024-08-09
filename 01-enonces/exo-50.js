// Exercice 50 : Grouper les personnes par champ "isWorkingAge"
const people = [
  { name: 'Alice', age: 15, isWorkingAge: false },
  { name: 'Bob', age: 20, isWorkingAge: true },
  { name: 'Charlie', age: 22, isWorkingAge: true },
  { name: 'David', age: 70, isWorkingAge: false },
  { name: 'Eve', age: 65, isWorkingAge: true },
];

// votre code ici .... //

// résultat attendu :
console.log(groupedByWorkingAge);
// { workingAge: ["Bob", "Charlie", "Eve"], nonWorkingAge: ["Alice", "David"] }
