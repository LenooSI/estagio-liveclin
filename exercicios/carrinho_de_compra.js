let produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Cadeira", preco: 1200 },
];

//Etapa 1:
produtos.forEach((produto) => {
  console.log(`${produto.nome} custa ${produto.preco} reais`);
});
console.log(
  "---------------------------------------------------------------------------",
);

//Etapa 2:
const produtosCaros = produtos.filter((p) => p.preco > 100);

console.log("Produtos com preço elevado: ");
produtosCaros.forEach((produto) => {
  console.log(`${produto.nome} custa ${produto.preco} reais`);
});
console.log(
  "---------------------------------------------------------------------------",
);

//Etapa 3:
let lista = produtos.map((p) => p.nome);
console.log(`Os produtos da lista são: ${lista.join(",")}`);
console.log(
  "---------------------------------------------------------------------------",
);

//Etapa 4:
let total = produtos.reduce((acc, p) => acc + p.preco, 0);
console.log(`Total: ${total} reais`);
