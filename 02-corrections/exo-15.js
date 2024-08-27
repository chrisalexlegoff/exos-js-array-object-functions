// Exercice 15 : Grouper les personnes par ville
const people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 20, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' },
  { name: 'David', age: 25, city: 'New York' },
  { name: 'Eve', age: 40, city: 'Los Angeles' },
];

function groupByCity(people) {
  return people.reduce((groups, person) => {
    if (!groups[person.city]) {
      groups[person.city] = [];
    }
    groups[person.city].push(person.name);
    return groups;
  }, {});
}

const groupedByCity = groupByCity(people);
console.log(groupedByCity);
// {
//   "New York": ["Alice", "David"],
//   "Los Angeles": ["Bob", "Eve"],
//   "Chicago": ["Charlie"]
// }
