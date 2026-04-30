function verificarPar(num) {
  return num % 2 === 0;
}

/*
function analisarNumero(num){
  if(verificarPar(num)){
    return `Número ${num} é Par`;
  } else {
    return`Número ${num} é Ímpar`;
  }
}

*/

function analisarNumero(num){
  return `Número ${num} é ${verificarPar(num) ? "Par" : "Ímpar"}`;
}

let resultado = analisarNumero(4);
console.log(resultado);

function dobrarPar(num){
  if(verificarPar(num)){
  return `resultado dobrado: ${num * 2}`;
  }
  else{
    return `resultado: ${num}`;
  }
}

let resultadoDobrado = dobrarPar(10);
console.log(resultadoDobrado);