/*
let produto = {                                   //criando e exibindo objeto
    nome: "Celular",
    preco: 3000,
    estoque: true,
};
console.log(`Produto ${produto.nome} custa ${produto.preco} reais`);

--------------------------------------------------------------------------


let produtos = [                                   //criando objeto com vários produtos e exibindo separados 
    {nome: "Mouse", preco: 50},  
    {nome: "Teclado", preco: 100},  
    {nome: "Monitor", preco: 800} 
];

    for(let i=0; i<produtos.length; i++){
        console.log(`${produtos[i].nome} custa ${produtos[i].preco} reais`);
    }

--------------------------------------------------------------------------

let caros = [];
let produtos = [                                   //criando objeto com vários produtos e exibindo os mais caros 
    {nome: "Mouse", preco: 50},  
    {nome: "Teclado", preco: 100},  
    {nome: "Monitor", preco: 800} 
];

    for(let i=0; i<produtos.length; i++){
        if(produtos[i].preco >100){
            caros.push(produtos[i])
        }
    }
console.log(caros);

--------------------------------------------------------------------------


let total = 0;
let produtos = [                                   //criando objeto com vários produtos e exibindo a soma (carrinho de compra) 
    {nome: "Mouse", preco: 50},  
    {nome: "Teclado", preco: 100},  
    {nome: "Monitor", preco: 800} 
];

    for(let i=0; i<produtos.length; i++){
        total += produtos[i].preco;
        }
console.log(`Total: ${total} Reais`);

--------------------------------------------------------------------------


let lista = [];
let produtos = [                                   //criando objeto com vários produtos e exibindo a soma (carrinho de compra) 
    {nome: "Mouse", preco: 50},  
    {nome: "Teclado", preco: 100},  
    {nome: "Monitor", preco: 800} 
];

    for(let i=0; i<produtos.length; i++){
        lista.push(produtos[i].nome);
    }   
console.log("Seu carrinho contém os seguintes itens:", lista);

--------------------------------------------------------------------------
*/

let produtos = [                                   //mesmo exercício de cima porém usando MAP 
    {nome: "Mouse", preco: 50},  
    {nome: "Teclado", preco: 100},  
    {nome: "Monitor", preco: 800} 
];

let lista = produtos.map(p => p.nome);

console.log("Seu carrinho contém os seguintes itens:", lista);
