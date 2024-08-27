// Exercice 2 : Calculer la moyenne des âges
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
];

function calculateAverageAge(people) {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

const averageAge = calculateAverageAge(people);
console.log(averageAge); // 27.5
