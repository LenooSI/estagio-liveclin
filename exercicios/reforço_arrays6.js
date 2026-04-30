function dobrarPar(num) {
  return num % 2 === 0 ? num * 2 : num;
}

function processarNumeros(numeros) {
  let resultado = [];

  for (let i = 0; i < numeros.length; i++) {
    let novoNumero = dobrarPar(numeros[i]);
    resultado.push(novoNumero);
  }
  return resultado;
}

let lista = [1, 2, 3, 4];
let resultado = processarNumeros(lista);

console.log(resultado);
