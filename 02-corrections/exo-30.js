// Exercice 30 : Trouver les noms des personnes de catégorie "senior"
const people = [
  { name: 'Alice', age: 10, category: 'child' },
  { name: 'Bob', age: 20, category: 'adult' },
  { name: 'Charlie', age: 35, category: 'adult' },
  { name: 'David', age: 70, category: 'senior' },
  { name: 'Eve', age: 40, category: 'adult' },
];

function findNamesByCategory(people, category) {
  return people.filter((person) => person.category === category).map((person) => person.name);
}

const seniors = findNamesByCategory(people, 'senior');
console.log(seniors); // ["David"]
