function map(array: any[], mapper: (a: any) => any) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(mapper(array[i]));
  }
  return result;
}

const testArray = ["leo", "leno"];
console.log(
  map(testArray, (name: string) => {
    return name.at(1);
  })
);
