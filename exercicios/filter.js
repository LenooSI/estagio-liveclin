/* 
let numbers = [10, 15, 20, 25, 30];          //pega somente numeros pares e exibe dentro do array

let evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumber);

----------------------------------------------------------------------
*/

let numbers = [10, 15, 20, 25, 30];          //multiplica os numeros por e exibe dentro do array
let multiplied = [];

for(let i=0; i< numbers.length; i++){
    multiplied.push(numbers[i] *2);
}
 console.log(multiplied);