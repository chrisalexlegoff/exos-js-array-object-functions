// Exercice 37 : Grouper les personnes par âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 40 },
];

function groupByAge(people) {
  return people.reduce((acc, person) => {
    if (!acc[person.age]) {
      acc[person.age] = [];
    }
    acc[person.age].push(person.name);
    return acc;
  }, {});
}

const groupedByAge = groupByAge(people);
console.log(groupedByAge);
// { 30: ["Alice", "David"], 20: ["Bob"], 35: ["Charlie"], 40: ["Eve"] }
