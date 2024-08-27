// Exercice 3 : Grouper les personnes par tranche d'âge (moins de 25, 25 à 35, plus de 35)
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// Emile
// let ageGroups = {
//   lessThan25: [],
//   between25And35: [],
//   moreThan35: [],
// };
// people.forEach((personne) => {
//   if (personne.age < 25) {
//     ageGroups.lessThan25.push(personne.name);
//   } else if (personne.age <= 35) {
//     ageGroups.between25And35.push(personne.name);
//   } else {
//     ageGroups.moreThan35.push(personne.name);
//   }
// });
// for (let person of people) {
//   if (person.age < 25) {
//     ageGroups.lessThan25.push(person.name);
//   } else if (person.age >= 25 && person.age <= 35) {
//     ageGroups.between25And35.push(person.name);
//   } else {
//     ageGroups.moreThan35.push(person.name);
//   }
// }

// Frédéric
const ageGroups = people.reduce(
  (fncallback, nom) => {
    const { age, name } = nom; //destructuring
    if (age < 25) {
      fncallback.lessThan25 = [...fncallback.lessThan25, name];
    } else if (age <= 35) {
      fncallback.between25And35 = [...fncallback.between25And35, name];
    } else {
      fncallback.moreThan35 = [...fncallback.moreThan35, name];
    }
    return fncallback;
  },
  { lessThan25: [], between25And35: [], moreThan35: [] }
);

// résultat attendu :
console.log(ageGroups);
// {
//   lessThan25: ["Bob"],
//   between25And35: ["Alice", "Charlie", "David"],
//   moreThan35: ["Eve"]
// }
