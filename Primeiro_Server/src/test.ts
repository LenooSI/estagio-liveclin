const nestedTest = {
  nivel1: {
    nivel2: {
      valor: [{ id: 1,coco123: 'coco123' }, { id: 2,coco123: 'coco123' }, { id: 3 ,coco123: 'coco123'}],
    },
  },
};
const propasdpkfhashiod = "teste-asdasa"
const atividade1 = {
  coco123: "abc",
  coco: {
    '1': "c",
    "teste-asdasa": "0",
    "3": "c",
    "4": "0",
  },
  deepNested: {
    nivel1: {
      nivel2: {
        valor: "coco123",
      },
    },
  },
  deepNested2: {
    nivel1: {
      nivel2: {
        valor: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  },
  lista1: [1, 2, 3, 4],
  lista2: [
    {
      corredorNome: "Leo",
      corredorIdade: "100",
      corredorMarca: "Ferrari",
    },
    {
      corredorNome: "Leno",
      corredorIdade: "100",
      corredorMarca: "Ferrari",
    },
    {
      corredorNome: "Alex",
      corredorIdade: "100",
      corredorMarca: "Ferrari",
    },
    {
      corredorNome: "Jordana",
      corredorIdade: "100",
      corredorMarca: "Ferrari",
    },
  ],
};


console.log(atividade1.coco['1']);
console.log(atividade1.coco[propasdpkfhashiod]);