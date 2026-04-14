/*
let numbers = [10, 15, 20, 25, 30];          //multiplica os numeros por 3 e exibe dentro do array

let multiplied = numbers.map(num => num *3);
console.log(multiplied);

--------------------------------------------------------------------------
*/

let produtos = [                                   //exibindo o nome dos itens do arrays 
    {nome: "Mouse", preco: 50},  
    {nome: "Teclado", preco: 100},  
    {nome: "Monitor", preco: 800} 
];

let lista = produtos.map(p => p.nome);

console.log("Seu carrinho contém os seguintes itens:", lista);