const numbers = [10, 5, 8, 20, 3];

function largestNumber(list) {
  let bigger = list[0];

  list.forEach((number) => {
    if (number > bigger) {
      bigger = number;
    }
  });

  return bigger;
}

console.log(largestNumber(numbers));
 
