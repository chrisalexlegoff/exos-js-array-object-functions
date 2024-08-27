// Exercice 4 : Trouver la personne avec le plus grand âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function findOldestPerson(people) {
  return people.reduce((oldest, person) => {
    return (oldest.age || 0) > person.age ? oldest : person;
  }, {});
}

const oldestPerson = findOldestPerson(people);
console.log(oldestPerson); // { name: "Eve", age: 40 }
