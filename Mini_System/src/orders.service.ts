import { Order } from "./order";
import { production } from "./data/orders";

function registerOrder(orders: Order[], newOrder: Order){
  return [...orders, newOrder];
}

const updatedOrders = registerOrder(production,
  {
    id: 3,
    customer: "Carlos",
    sector: "Finishing",
    status: "Queue",
  });

//console.log(updatedOrders);

function updatedOrdersStatus(orders: Order[], id: number, newStatus: Order["status"]){
  return orders.map((order) => {
    if(order.id === id){
      return{
        ...order,
        status: newStatus
      };
    }
    return order
  })
}

const updateStatus = updatedOrdersStatus(production, 1, "Cut");
//console.log(updateStatus)

function findOrderById(id: Order["id"]){
  const idExisting = production.find((order) => order.id === id);
    if(!idExisting){
    return "Order not found"
  }
  
  return idExisting
}

const findId = findOrderById(2);
//console.log(findId)

function deleteOrderById(production: Order[], id: Order["id"]){
  const orderExisting = production.some((order) => order.id === id);

  if(!orderExisting){
    return "Order not found"
  }
  
  return production.filter((order) => order.id !== id)
}

const deleteOrder = deleteOrderById(production,4);
//console.log(deleteOrder)