// Exercice 1 : Trouver les noms des personnes âgées de plus de 25 ans
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
];

// Laura
// for (const person of people) {
//   if (person.age > 25) {
//     console.log(person.name);
//   }
// }

// Adrien
// const contenuPeople = people.filter((person) => person.age > 25);
// const result = contenuPeople.map((person) => person.name);

function findNamesOverAge(tabOfPeople, age) {
  return tabOfPeople.filter((person) => person.age > age).map((person) => person.name);
}

const result = findNamesOverAge(people, 25);
const result2 = findNamesOverAge(people, 30);
console.log(result); // ["Alice", "Charlie"]
console.log(result2); // ["Charlie"]
