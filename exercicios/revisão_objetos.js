const people = [
  { name: "Carlos", age: 22 },
  { name: "Ana", age: 15 },
  { name: "Bruno", age: 30 },
  { name: "Julia", age: 17 },
];

function filterAdults(list) {
  return list.filter((person) => {
    return person.age >= 18;
  });
}

const adults = filterAdults(people);
//console.log(adults);

function getNames(lista){
  return lista.map((person) => person.name)
}

const namePeople = getNames(people);
console.log(namePeople)