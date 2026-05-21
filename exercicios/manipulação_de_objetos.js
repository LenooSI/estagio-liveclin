const garagem = [
  { marca: "Honda", modelo: "Civic", ano: 2008 },
  { marca: "Toyota", modelo: "Corolla", ano: 2000 },
  { marca: "Nissan", modelo: "Skyline", ano: 1999 },
  { marca: "Ford", modelo: "F-4000", ano: 1980 },
  { marca: "Volkswagen", modelo: "Gol", ano: 2020 },
  { marca: "Honda", modelo: "Accord", ano: 2025 },
];

function listarCarrosAntigos(lista) {
  lista.forEach((carro) => {
    if (carro.ano < 2000) {
      console.log(carro.marca, carro.modelo);
    }
  });
}

//listarCarrosAntigos(garagem);

function buscarCarrosAntigos(lista) {
  return lista.filter((carro) => carro.ano < 2000);
}

//const antigos = buscarCarrosAntigos(garagem);
//console.log(antigos);

function pegarModelos(lista) {
  return lista.map((p) => p.modelo);
}

//const modelos = pegarModelos(garagem);
//console.log(modelos);

function buscarCarrosAntigos(lista) {
  const antigos = lista.filter((carro) => carro.ano < 2000);
  return antigos.map((p) => p.modelo);
}

//const modelosAntigos = buscarCarrosAntigos(garagem);
//console.log(modelosAntigos);

function modelosCarrosAntigos(lista) {
  // mesmo exemplo de cima porém "melhorado"
  return lista.filter((carro) => carro.ano < 2000).map((carro) => carro.modelo);
}

//const modelosAntigos = buscarCarrosAntigos(garagem);
//console.log(modelosAntigos);

function totalCarrosNovos(lista) {
  return lista.filter((carro) => {
    return carro.ano >= 2010;
  }).length;
}

//console.log(totalCarrosNovos(garagem))

function buscarPorModelo(lista, modelo) {
  return lista.find((carro) => {
    return carro.modelo === modelo;
  });
}

//console.log(buscarPorModelo(garagem, "Civic"));

function verificarCarroNovo(lista) {
  return lista.some((carro) => {
    return carro.ano >= 2020;
  });
}
//console.log(verificarCarroNovo(garagem))

function todosSaoNovos(lista){
  return lista.every((carro) => {
    return carro.ano >= 2000;
  })
}

//console.log(todosSaoNovos(garagem))

function somarAnosCarros(lista) {
  const totalAnos = lista.reduce((total, carro) => total + carro.ano, 0);
  return totalAnos;
}

//console.log(somarAnosCarros(garagem))

function carrosPorMarca(lista) {
  return lista.reduce((total, carro) => {
    if (total[carro.marca]) {
      total[carro.marca]++;
    } else {
      total[carro.marca] = 1;
    }
    return total;
  }, {});
}

//console.log(carrosPorMarca(garagem))

function calcularMediaAno(lista) {
  const totalCarros = lista.length;
  const totalAno = lista.reduce((total, carro) => total + carro.ano, 0);
  return totalAno / totalCarros;
}

//console.log(calcularMediaAno(garagem))

function ordenarPorAno(lista) {
  return lista.sort((a, b) => {
    return a.ano - b.ano;
  });
}

//console.log(ordenarPorAno(garagem))

function modelosOrdenados(lista) {
  return lista
    .filter((carro) => carro.ano >= 2000)
    .sort((a, b) => b.ano - a.ano)
    .map((carro) => carro.modelo);
}

//console.log(modelosOrdenados(garagem));

function exibirCarro(carro){

  const { marca, modelo, ano } = carro;

  console.log(`${marca} - ${modelo} (${ano})`);
}

//exibirCarro(garagem[0]);

function adicionarCarro(lista, novoCarro){
  return [...lista, novoCarro];
}

const novaGaragem = adicionarCarro(garagem, {
  marca: "BMW",
  modelo: "M3",
  ano: 2026
});

//console.log(novaGaragem)

function atualizarAno(lista, modelo, novoAno){
   return lista.map((carro) => {
    if(carro.modelo === modelo){
      return{
        ...carro,
        ano: novoAno
      };
    }
    return carro;
  });
}

const garagemAtualizada = atualizarAno(garagem, "Civic", 2025);
console.log(garagemAtualizada);
