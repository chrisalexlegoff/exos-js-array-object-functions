// Exercice 40 : Filtrer les personnes qui peuvent voter
const people = [
  { name: 'Alice', age: 17, canVote: false },
  { name: 'Bob', age: 20, canVote: true },
  { name: 'Charlie', age: 16, canVote: false },
  { name: 'David', age: 25, canVote: true },
  { name: 'Eve', age: 40, canVote: true },
];

function filterCanVote(people) {
  return people.filter((person) => person.canVote);
}

const canVotePeople = filterCanVote(people);
console.log(canVotePeople);
// [
//   { name: "Bob", age: 20, canVote: true },
//   { name: "David", age: 25, canVote: true },
//   { name: "Eve", age: 40, canVote: true }
// ]
