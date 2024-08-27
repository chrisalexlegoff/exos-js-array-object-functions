// Exercice 12 : Filtrer les personnes dont le nom commence par une lettre spécifique
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// Laura
// function filteredPeopleByInitial(people, initial) {
//   return people.filter((person) => person.name.charAt(0).toUpperCase() === initial.toUpperCase());
// }
// const filteredPeople = filteredPeopleByInitial(people, 'a');

// Emile
// const filteredPeople = people.filter((person) => person.name.startsWith('A'));

// Adrien
const specificLetter = 'A';
const filteredPeople = people.filter((person) => person.name.startsWith(specificLetter));

// résultat attendu :
console.log(filteredPeople);
// [{ name: "Alice", age: 30 }]
