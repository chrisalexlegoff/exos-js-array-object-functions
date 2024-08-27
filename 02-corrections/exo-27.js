// Exercice 27 : Trouver le nombre de personnes par tranche d'âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
  { name: 'Frank', age: 50 },
  { name: 'Grace', age: 15 },
];

function countByAgeRange(people) {
  return people.reduce((acc, person) => {
    if (person.age < 20) {
      acc['lessThan20'] = (acc['lessThan20'] || 0) + 1;
    } else if (person.age < 30) {
      acc['20to29'] = (acc['20to29'] || 0) + 1;
    } else if (person.age < 40) {
      acc['30to39'] = (acc['30to39'] || 0) + 1;
    } else {
      acc['40andAbove'] = (acc['40andAbove'] || 0) + 1;
    }
    return acc;
  }, {});
}

const ageRanges = countByAgeRange(people);
console.log(ageRanges);
// { lessThan20: 1, 20to29: 2, 30to39: 2, 40andAbove: 2 }
