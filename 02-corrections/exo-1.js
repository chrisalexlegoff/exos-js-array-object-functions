const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
];
function findNamesOverAge(people, age) {
  return people.filter((person) => person.age > age).map((person) => person.name);
}

const result = findNamesOverAge(people, 25);
console.log(result); // ["Alice", "Charlie"]
