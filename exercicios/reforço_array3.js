let pedidos = [
  { id: 1, cliente: "Leno", total: 500, status: "pendente" },
  { id: 2, cliente: "Maria", total: 1500, status: "pago" },
  { id: 3, cliente: "João", total: 200, status: "pendente" },
  { id: 4, cliente: "Ana", total: 3000, status: "pago" },
];

function exibirPedido(pedido){
  console.log(`Pedido ${pedido.id} - ${pedido.cliente} - ${pedido.total} - ${pedido.status}`)
}

function pedidoPago(pedidoStatus){
  return pedidoStatus === "pago";
}

for(let i=0; i<pedidos.length; i++){
  if(pedidoPago (pedidos[i].status)){
    exibirPedido(pedidos[i]);
  }
}
