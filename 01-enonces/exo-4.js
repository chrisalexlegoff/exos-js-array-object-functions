// Exercice 4 : Trouver la personne avec le plus grand âge
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// Frédéric
// const oldestPerson = people.reduce((year, testvalue) => {
//   const { name, age } = testvalue;
//   for (testvalue of people) {
//     do {
//       year.name = name;
//       year.age = age;
//     } while (age > year.age);
//   }
//   return year;
// }, {});
// initialisation objet vide

// Adrien
const oldestPerson = people.reduce((oldest, person) => {
  if (person.age > oldest.age) {
    return person;
  } else {
    return oldest;
  }
});

// résultat attendu :
console.log(oldestPerson); // { name: "Eve", age: 40 }
