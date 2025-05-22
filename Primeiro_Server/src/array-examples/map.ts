// You should create a new array based on the first one that contains a user description in the following format:
/* 
 equal type = ExerciseUserWithFullName wheer the fullName is created joining name + lastName 
*/
// Usando uma função anonima e uma função armazenada dentro de uma variavel

export type ExerciseUserWithFullName = {
  id: number;
  name: string;
  age: number;
  lastName: string;
  fullName: string;
};

import { ExerciseUser, usersArrayTest } from "./array-test";

const mapper = (el: ExerciseUser): ExerciseUserWithFullName => {
  return {
    id: Number(el.id),
    age: Number(el.age),
    name: String(el.name),
    lastName: String(el.lastName),
    fullName: `${el.name} ${el.lastName}`,
  };
};

const result = usersArrayTest.map(mapper);
console.log(result);
