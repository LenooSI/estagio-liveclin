function filtrarMaiores(numeros) {
  let resultado = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
      resultado.push(numeros[i]);
    }
  }
  return resultado;
}

function somarMaiores(numeros){
  let maiores = filtrarMaiores(numeros);
  let total = maiores.reduce((acc, n) => acc + n, 0);

  console.log(total);
}


let lista = [5, 12, 8, 20];

console.log(filtrarMaiores(lista));
somarMaiores(lista);


