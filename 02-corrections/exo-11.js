// Exercice 11 : Ajouter un suffixe "_Jr" aux noms des personnes de moins de 30 ans
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

function addSuffixToNames(people, age, suffix) {
  return people.map((person) => ({
    ...person,
    name: person.age < age ? person.name + suffix : person.name,
  }));
}

const updatedPeople = addSuffixToNames(people, 30, '_Jr');
console.log(updatedPeople);
// [
//   { name: "Alice", age: 30 },
//   { name: "Bob_Jr", age: 20 },
//   { name: "Charlie", age: 35 },
//   { name: "David_Jr", age: 25 },
//   { name: "Eve", age: 40 }
// ]
