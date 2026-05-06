const garagem = [
  { marca: "Honda", modelo: "Civic", ano: 2008 },
  { marca: "Toyota", modelo: "Corolla", ano: 2000 },
  { marca: "Nissan", modelo: "Skyline", ano: 1999 },
  { marca: "Ford", modelo: "F-4000", ano: 1980 },
  { marca: "Volkswagen", modelo: "Gol", ano: 2020 },
];

garagem.forEach((carro) => {
  console.log(carro.modelo);
});

garagem.forEach((carro) => {
  if(carro.ano < 2010){
    console.log(carro.modelo)
  }
})