const garagem = [
  { marca: "Honda", modelo: "Civic", ano: 2008 },
  { marca: "Toyota", modelo: "Corolla", ano: 2000 },
  { marca: "Nissan", modelo: "Skyline", ano: 1999 },
  { marca: "Ford", modelo: "F-4000", ano: 1980 },
  { marca: "Volkswagen", modelo: "Gol", ano: 2020 },
];

function listarCarrosAntigos(lista) {
  lista.forEach((carro) => {                              // exemplo de forEach
    if (carro.ano < 2000) {
      console.log(carro.marca, carro.modelo);
    }
  });
}

//listarCarrosAntigos(garagem);

function buscarCarrosAntigos(lista) {                             // exemplo de filter
  return lista.filter((carro) => carro.ano < 2000);
}

//const antigos = buscarCarrosAntigos(garagem);
//console.log(antigos);

function pegarModelos(lista){                                // exemplo de map
  return lista.map(p => p.modelo);
}

//const modelos = pegarModelos(garagem);
//console.log(modelos);

function buscarCarrosAntigos(lista) {                             // exemplo de filter e map juntos
  const antigos = lista.filter((carro) => carro.ano < 2000);
  return antigos.map(p => p.modelo);
}

//const modelosAntigos = buscarCarrosAntigos(garagem);
//console.log(modelosAntigos);

function modelosCarrosAntigos(lista) {                             // mesmo exemplo de cima porém "melhorado"
  return lista
    .filter(carro => carro.ano < 2000)
    .map(carro => carro.modelo);
}

const modelosAntigos = buscarCarrosAntigos(garagem);
console.log(modelosAntigos);