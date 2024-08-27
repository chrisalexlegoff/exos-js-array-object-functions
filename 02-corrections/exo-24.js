// Exercice 24 : Filtrer les personnes nées après l'année 2000
const people = [
  { name: 'Alice', age: 30, birthYear: 1994 },
  { name: 'Bob', age: 20, birthYear: 2004 },
  { name: 'Charlie', age: 35, birthYear: 1989 },
  { name: 'David', age: 25, birthYear: 1999 },
  { name: 'Eve', age: 40, birthYear: 1984 },
];

function filterByBirthYear(people, year) {
  return people.filter((person) => person.birthYear > year);
}

const bornAfter2000 = filterByBirthYear(people, 2000);
console.log(bornAfter2000);
// [{ name: "Bob", age: 20, birthYear: 2004 }]
