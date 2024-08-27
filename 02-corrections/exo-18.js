// Exercice 18 : Vérifier si au moins une personne est mineure
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 17 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function isAnyMinor(people) {
  return people.some((person) => person.age < 18);
}

const anyMinor = isAnyMinor(people);
console.log(anyMinor); // true
