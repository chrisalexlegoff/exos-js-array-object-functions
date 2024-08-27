// Exercice 19 : Trouver les personnes ayant un certain âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 30 },
];

function findPeopleByAge(people, age) {
  return people.filter((person) => person.age === age).map((person) => person.name);
}

const peopleAge30 = findPeopleByAge(people, 30);
console.log(peopleAge30); // ["Alice", "Eve"]
