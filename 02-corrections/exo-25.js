// Exercice 25 : Convertir un tableau d'objets en tableau de valeurs d'un champ spécifique
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function extractFieldValues(people, field) {
  return people.map((person) => person[field]);
}

const ages = extractFieldValues(people, 'age');
console.log(ages); // [30, 20, 35, 25, 40]
