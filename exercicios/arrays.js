/*let numbers = [10, 20, 30, 40, 50];          //exibir os numeros do array

for(let i=0; i< numbers.length; i++){
    console.log(numbers[i])
}

--------------------------------------------

let numbers = [10, 20, 30, 40, 50];          //exibir a soma dos numeros do array
let soma = 0;

for(let i=0; i< numbers.length; i++){
    soma += numbers[i];
}
console.log(soma)

-----------------------------------------


let numbers = [10, 15, 20, 25, 30];          //exibir somente numeros maiores que 20

for(let i=0; i< numbers.length; i++){
    if(numbers[i] >20){
        console.log(numbers[i])
    }
}

-----------------------------------------


let numbers = [10, 15, 20, 25, 30];          //pega somente numeros menores que 20 e exibe dentro do array
let smallersNumber = [];

for(let i=0; i< numbers.length; i++){
    if(numbers[i] <20){
        smallersNumber.push(numbers[i])
    }
}
console.log(smallersNumber)

-----------------------------------------
*/

let numbers = [10, 15, 20, 25, 30];          //pega somente numeros pares e exibe dentro do array
let evenNumber = [];

for(let i=0; i< numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumber.push(numbers[i])
    }
}
console.log(evenNumber)