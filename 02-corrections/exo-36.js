// Exercice 36 : Filtrer les adolescents du tableau
const people = [
  { name: 'Alice', age: 12, isTeenager: false },
  { name: 'Bob', age: 17, isTeenager: true },
  { name: 'Charlie', age: 20, isTeenager: false },
  { name: 'David', age: 15, isTeenager: true },
  { name: 'Eve', age: 25, isTeenager: false },
];

function filterTeenagers(people) {
  return people.filter((person) => person.isTeenager);
}

const teenagers = filterTeenagers(people);
console.log(teenagers);
// [{ name: "Bob", age: 17, isTeenager: true }, { name: "David", age: 15, isTeenager: true }]
