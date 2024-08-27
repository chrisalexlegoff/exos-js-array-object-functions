// Exercice 31 : Grouper les personnes par première lettre de leur nom
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function groupByInitial(people) {
  return people.reduce((acc, person) => {
    const initial = person.name[0];
    if (!acc[initial]) {
      acc[initial] = [];
    }
    acc[initial].push(person.name);
    return acc;
  }, {});
}

const groupedByInitial = groupByInitial(people);
console.log(groupedByInitial);
// { A: ["Alice"], B: ["Bob"], C: ["Charlie"], D: ["David"], E: ["Eve"] }
