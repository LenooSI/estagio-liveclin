/*function buscarNumero(numeros, alvo){

for(let i = 0; i < numeros.length; i++){
  if(numeros[i] === alvo){
    return `${alvo}: Encontrado`;
  }
  }
  return `${alvo} : Não encontrado`;
}

let lista = [5, 12, 8, 20];

console.log(buscarNumero(lista, 12));
console.log(buscarNumero(lista, 10));
-------------------------------------------------------------------------

function contarOcorrencias(numeros, alvo) {
  let total = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === alvo) {
      total++;
    }
  }
  return total;
}

let lista = [1,2,2,3,2];

console.log(contarOcorrencias(lista, 2));
console.log(contarOcorrencias(lista, 10));
*/

let bancoDeDados = [
  { nome: "Leno", nota: 8 },
  { nome: "Maria", nota: 5 },
  { nome: "João", nota: 9 },
  { nome: "Ana", nota: 6 },
];

function listarAlunos(alunos) {
  alunos.forEach((aluno) => {
    console.log(`${aluno.nome} - ${aluno.nota}`);
  });
}

//listarAlunos(alunos);

function calcularAlunosAprovados(alunos) {
  const aprovados = [];
  alunos.forEach((aluno) => {
    if(aluno.nota >= 7) {
      aprovados.push(aluno);
    }
  });
  return aprovados;
}

//const alunosAprovados = calcularAlunosAprovados(bancoDeDados)
//listarAlunos(alunosAprovados);

function calcularMedia(alunos){
  let totalNotas = alunos.reduce((acc, n) => acc + n.nota, 0);
  let totalAlunos = alunos.length;
  return totalNotas / totalAlunos;
}

//const mediaDaTurma = calcularMedia(bancoDeDados);
//console.log(mediaDaTurma);

function buscarMelhorAluno(bancoDeDados){
  let melhorAluno = bancoDeDados[0];
  
  bancoDeDados.forEach((aluno) => {
    if(aluno.nota > melhorAluno.nota){
      melhorAluno = aluno;
    }
  })
  return melhorAluno;
}

const melhor = buscarMelhorAluno(bancoDeDados)
listarAlunos([melhor]);