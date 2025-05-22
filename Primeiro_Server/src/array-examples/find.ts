// Find the first user older than 40.

export type ExerciseUserMore18 = {
  id: number;
  age: number;
  name: string;
};

import { ExerciseUser, usersArrayTest } from "./array-test";

const byAgeAndName = (el: ExerciseUserMore18) => {
  const firstLetter = el.name[0]
  const isLetterA = firstLetter === "A"
  const isValidAge = el.age > 20 
  return isValidAge && isLetterA
};

const result = usersArrayTest.find(byAgeAndName);
console.log(result);