// Return only a list of names that match the following condition:
// The condition being return all users with age greater or equal 45
//

/*
expected output = 
["Eve"]
*/

export type ExerciseUserMore45 = {
  age: number;
  name: string;
};

import { ExerciseUser, usersArrayTest } from "./array-test";

const byAge45 = (el: ExerciseUserMore45) => {
  const firstLetter = el.name[0]
  const isValidAge = el.age > 44
  return isValidAge && firstLetter
}

const result = usersArrayTest.filter(byAge45).map(el => el.name)
console.log(result);

