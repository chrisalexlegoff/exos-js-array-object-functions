// Exercice 20 : Trouver l'âge moyen des personnes dans chaque ville
const people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 20, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' },
  { name: 'David', age: 25, city: 'New York' },
  { name: 'Eve', age: 40, city: 'Los Angeles' },
];

function calculateAverageAgePerCity(people) {
  const ageSumsAndCounts = people.reduce((acc, person) => {
    if (!acc[person.city]) {
      acc[person.city] = { sum: 0, count: 0 };
    }
    acc[person.city].sum += person.age;
    acc[person.city].count += 1;
    return acc;
  }, {});

  return Object.keys(ageSumsAndCounts).reduce((acc, city) => {
    acc[city] = ageSumsAndCounts[city].sum / ageSumsAndCounts[city].count;
    return acc;
  }, {});
}

const averageAges = calculateAverageAgePerCity(people);
console.log(averageAges);
// { "New York": 27.5, "Los Angeles": 30, "Chicago": 35 }
