let pedidos = [
  { id: 1, cliente: "Leno", total: 500, status: "pedente" },
  { id: 2, cliente: "Maria", total: 1500, status: "pago" },
  { id: 3, cliente: "João", total: 200, status: "pedente" },
  { id: 4, cliente: "Ana", total: 3000, status: "pago" },
];

function exibirCliente(pedidos) {
  return pedidos.map((p) => p.cliente);
}

let clientes = exibirCliente(pedidos);
console.log(clientes);

let maiorPedido = pedidos[0]; // começa com o primeiro

for (let i = 1; i < pedidos.length; i++) {
  if (pedidos[i].total > maiorPedido.total) {
    maiorPedido = pedidos[i];
  }
}

console.log(
  `Maior pedido: ${maiorPedido.cliente} - ${maiorPedido.total} reais`,);
