let pedidos = [
  { id: 1, cliente: "Leno", total: 500, status: "pedente" },
  { id: 2, cliente: "Maria", total: 1500, status: "pago" },
  { id: 3, cliente: "João", total: 200, status: "pedente" },
  { id: 4, cliente: "Ana", total: 3000, status: "pago" },
];

function exibirPedido(pedido){
  console.log(`Pedido ${pedido.id} - ${pedido.cliente} - ${pedido.total} - ${pedido.status}`)
}

function encontrarPedido(pedidoId){
    for(let i=0; i<pedidos.length; i++){
        if(pedidoId === pedidos[i].id)
            exibirPedido(pedidos[i])
}
}

encontrarPedido(4)