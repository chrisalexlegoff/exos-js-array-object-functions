// Exercice 16 : Trouver le plus jeune et le plus vieux dans chaque ville
const people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 20, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' },
  { name: 'David', age: 25, city: 'New York' },
  { name: 'Eve', age: 40, city: 'Los Angeles' },
];

function findYoungestAndOldestInCity(people) {
  return people.reduce((result, person) => {
    if (!result[person.city]) {
      result[person.city] = { youngest: person, oldest: person };
    } else {
      if (person.age < result[person.city].youngest.age) {
        result[person.city].youngest = person;
      }
      if (person.age > result[person.city].oldest.age) {
        result[person.city].oldest = person;
      }
    }
    return result;
  }, {});
}

const youngestAndOldest = findYoungestAndOldestInCity(people);
console.log(youngestAndOldest);
// {
//   "New York": { youngest: { name: "David", age: 25 }, oldest: { name: "Alice", age: 30 } },
//   "Los Angeles": { youngest: { name: "Bob", age: 20 }, oldest: { name: "Eve", age: 40 } },
//   "Chicago": { youngest: { name: "Charlie", age: 35 }, oldest: { name: "Charlie", age: 35 } }
// }
