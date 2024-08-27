// Exercice 50 : Grouper les personnes par champ "isWorkingAge"
const people = [
  { name: 'Alice', age: 15, isWorkingAge: false },
  { name: 'Bob', age: 20, isWorkingAge: true },
  { name: 'Charlie', age: 22, isWorkingAge: true },
  { name: 'David', age: 70, isWorkingAge: false },
  { name: 'Eve', age: 65, isWorkingAge: true },
];

function groupByWorkingAge(people) {
  return people.reduce((acc, person) => {
    const key = person.isWorkingAge ? 'workingAge' : 'nonWorkingAge';
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(person.name);
    return acc;
  }, {});
}

const groupedByWorkingAge = groupByWorkingAge(people);
console.log(groupedByWorkingAge);
// { workingAge: ["Bob", "Charlie", "Eve"], nonWorkingAge: ["Alice", "David"] }
