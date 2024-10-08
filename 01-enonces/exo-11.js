// Exercice 11 : Ajouter un suffixe "_Jr" aux noms des personnes de moins de 30 ans
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 25 },
  { name: 'Eve', age: 40 },
];

// Frédéric
const updatedPeople = people.map((update) => {
  if (update.age < 30) {
    return { ...update, name: `${update.name}_Jr` }; //! Modifie la propriété name selon condition.
  }
  return update; //! retourne les autres valeurs sinon undefined...
});

// résultat attendu :
console.log(updatedPeople);
// [
//   { name: "Alice", age: 30 },
//   { name: "Bob_Jr", age: 20 },
//   { name: "Charlie", age: 35 },
//   { name: "David_Jr", age: 25 },
//   { name: "Eve", age: 40 }
// ]
