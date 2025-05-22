// Return only the elements that match a condition.
// The condition being return all users with age greater or equal 18

/*
expected output = 
[
  { id: 1, name: "Alice", age: 23 },
  { id: 3, name: "Charlie", age: 32 },
  { id: 4, name: "Diana", age: 19 },
  { id: 5, name: "Eve", age: 45 }
];
*/

export type ExerciseUserMore18 = {
  id: number;
  age: number;
  name: string;
};

import { ExerciseUser, usersArrayTest } from "./array-test";

const byAgeAndName = (el: ExerciseUserMore18) => {
  const firstLetter = el.name[0]
  const isLetterA = firstLetter === "A"
  const isValidAge = el.age > 18 
  return isValidAge && isLetterA
};

const byComecaAlAndNaoTerminaC = (el: ExerciseUserMore18) => {
  const firstLetter = el.name[0]
  const secoundtLetter = el.name[1]
  const lastLetter = el.name [el.name.length -1]
  const isLetterA = firstLetter === "A"
  const isLetteL = secoundtLetter === "l"
  const isNotLetteC = lastLetter !== "C"
  return isLetterA && isLetteL && isNotLetteC
}
const result = usersArrayTest.filter(byAgeAndName);
console.log(result);

const result2 = usersArrayTest.filter(byComecaAlAndNaoTerminaC);
console.log(result2);
