// Exercice 13 : Calculer l'âge moyen des personnes dont le nom commence par une lettre spécifique
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function calculateAverageAgeByInitial(people, initial) {
  const filteredPeople = people.filter((person) => person.name.startsWith(initial));
  const totalAge = filteredPeople.reduce((sum, person) => sum + person.age, 0);
  return totalAge / filteredPeople.length;
}

const averageAge = calculateAverageAgeByInitial(people, 'B');
console.log(averageAge); // 20
