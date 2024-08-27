// Exercice 26 : Calculer la somme des âges des personnes
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function sumOfAges(people) {
  return people.reduce((sum, person) => sum + person.age, 0);
}

const totalAge = sumOfAges(people);
console.log(totalAge); // 150
