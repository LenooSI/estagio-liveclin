export type ExerciseUser = {
  id: number;
  name: string;
  age: number;
  lastName: string;
};

export const usersArrayTest: ExerciseUser[] = [
  { id: 1, name: "Alice", age: 23, lastName: "Tomazeli" },
  { id: 1, name: "Alice A", age: 23, lastName: "Tomazeli" },
  { id: 1, name: "Alice B", age: 23, lastName: "Tomazeli" },
  { id: 1, name: "Alice C", age: 23, lastName: "Tomazeli" },
  { id: 2, name: "Bob", age: 17, lastName: "Maralha" },
  { id: 3, name: "Charlie", age: 32, lastName: "Bento" },
  { id: 4, name: "Diana", age: 19, lastName: "Coco123" },
  { id: 5, name: "Eve", age: 45, lastName: "Teste" },
];
