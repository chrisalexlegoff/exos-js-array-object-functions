// Exercice 41 : Calculer la moyenne d'âge des personnes pouvant voter
const people = [
  { name: 'Alice', age: 17, canVote: false },
  { name: 'Bob', age: 20, canVote: true },
  { name: 'Charlie', age: 16, canVote: false },
  { name: 'David', age: 25, canVote: true },
  { name: 'Eve', age: 40, canVote: true },
];

function calculateAverageAgeOfVoters(people) {
  const voters = people.filter((person) => person.canVote);
  const totalAge = voters.reduce((sum, person) => sum + person.age, 0);
  return Math.round(totalAge / voters.length);
}

const averageAgeOfVoters = calculateAverageAgeOfVoters(people);
console.log(averageAgeOfVoters); // 28
