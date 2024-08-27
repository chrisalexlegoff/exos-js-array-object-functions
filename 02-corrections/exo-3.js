// Exercice 3 : Grouper les personnes par tranche d'âge (moins de 25, 25 à 35, plus de 35)
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function groupByAgeRange(people) {
  return people.reduce(
    (groups, person) => {
      if (person.age < 25) {
        groups['lessThan25'].push(person.name);
      } else if (person.age <= 35) {
        groups['between25And35'].push(person.name);
      } else {
        groups['moreThan35'].push(person.name);
      }
      return groups;
    },
    { lessThan25: [], between25And35: [], moreThan35: [] }
  );
}

const ageGroups = groupByAgeRange(people);
console.log(ageGroups);
