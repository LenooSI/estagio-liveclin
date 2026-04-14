let produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
  { nome: "Monitor", preco: 800 },
  { nome: "Cadeira", preco: 1200 },
];

function mostrarProdutos(produtos) {
  console.log(`Produto: ${produtos.nome} custa ${produtos.preco} reais`);
}

for (let i = 0; i < produtos.length; i++) {
  mostrarProdutos(produtos[i]);
}

function produtosCaros(produtos) {
  return produtos.preco > 100;
}

for (let i = 0; i < produtos.length; i++) {
  if (produtosCaros(produtos[i])) {
    console.log(produtos[i].nome);
  }
}

function calcularTotal(produtos) {
  let total = produtos.reduce((acc,p) => acc + p.preco,0);
  return total;
}

let total = calcularTotal(produtos);
console.log(`Total de produtos: ${total} reais`);

function filtrarCaros(produtos) {
  return produtos.filter((p) => p.preco > 100);
}

let caros = filtrarCaros(produtos);
console.log(`Produtos com valor acima de 100 reais:`, caros);

function filtrarNomes(produtos) {
  return produtos.map((p) => p.nome);
}

let nomes = filtrarNomes(produtos);
console.log(nomes);
