// Exercice 45 : Filtrer les personnes pouvant conduire
const people = [
  { name: 'Alice', age: 15, canDrive: false },
  { name: 'Bob', age: 20, canDrive: true },
  { name: 'Charlie', age: 16, canDrive: true },
  { name: 'David', age: 25, canDrive: true },
  { name: 'Eve', age: 14, canDrive: false },
];

function filterCanDrive(people) {
  return people.filter((person) => person.canDrive);
}

const canDrivePeople = filterCanDrive(people);
console.log(canDrivePeople);
// [
//   { name: "Bob", age: 20, canDrive: true },
//   { name: "Charlie", age: 16, canDrive: true },
//   { name: "David", age: 25, canDrive: true }
// ]