// Exercice 29 : Filtrer les personnes de catégorie "adulte"
const people = [
  { name: 'Alice', age: 10, category: 'child' },
  { name: 'Bob', age: 20, category: 'adult' },
  { name: 'Charlie', age: 35, category: 'adult' },
  { name: 'David', age: 70, category: 'senior' },
  { name: 'Eve', age: 40, category: 'adult' },
];

function filterByCategory(people, category) {
  return people.filter((person) => person.category === category);
}

const adults = filterByCategory(people, 'adult');
console.log(adults);
// [
//   { name: "Bob", age: 20, category: "adult" },
//   { name: "Charlie", age: 35, category: "adult" },
//   { name: "Eve", age: 40, category: "adult" }
// ]
