let pedidos = [
  { id: 1, cliente: "Leno", total: 500, status: "pendente" },
  { id: 2, cliente: "Maria", total: 1500, status: "pago" },
  { id: 3, cliente: "João", total: 200, status: "pendente" },
  { id: 4, cliente: "Ana", total: 3000, status: "pago" },
];

function exibirPedido(pedido){
  console.log(`Pedido ${pedido.id} - ${pedido.cliente} - ${pedido.total} - ${pedido.status}`)
}

function pedidosRecebidos(){
  const pedidosPagos = [];
  for(let i=0; i<pedidos.length; i++){
  if(pedidos[i].status === "pago")
  pedidosPagos.push(pedidos[i])
  }
  return pedidosPagos;
}

console.log(pedidosRecebidos());

function totalRecebido(){
  let total = pedidosRecebidos().reduce((acc, p) => acc + p.total, 0)
  console.log(`Valor recebido: ${total} reais`)
}
 
totalRecebido()
