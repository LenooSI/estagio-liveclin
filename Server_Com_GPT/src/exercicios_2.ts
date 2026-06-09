const turma = [
  { nome: "Leno", nota: 8 },
  { nome: "Maria", nota: 5 },
  { nome: "João", nota: 9 },
  { nome: "Ana", nota: 6 },
];

type Aluno = {
  nome: string;
  nota: number;
};

type Matricula = {
  nome: string;
  nota: number;
  status: string;
};

function alunosAprovados(alunos: Aluno[]) {
  let aprovados: Matricula[] = [];

  alunos.forEach((aluno) => {
    if (aluno.nota >= 6) {
      aprovados.push({
        nome: aluno.nome,
        nota: aluno.nota,
        status: "Aprovado",
      });
    }
  });

  return aprovados;
}

//console.log(alunosAprovados(alunos))

function alunosMatriculados(alunos: Aluno[]) {
  let estudantes: Matricula[] = [];

  alunos.forEach((aluno) => {
    const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";

    estudantes.push({
      nome: aluno.nome,
      nota: aluno.nota,                                                                            // AQUI
      status,
    });
  });

  return estudantes;
}

//console.log(alunosMatriculados(alunos))

function buscarAluno(alunos: Aluno[], nome: string) {
  const matriculado = alunos.find((aluno) => aluno.nome === nome);

  return matriculado || "Aluno não encontrado";
}

//console.log(buscarAluno(turma, "Leno"))

function atualizarNota(aluno: Aluno[], nome: string, novaNota: number) {
  const alunoExistente = aluno.some((aluno) => aluno.nome === nome);

  if (!alunoExistente) {
    return "Aluno não encontrado";
  }
  return aluno.map((aluno) => {
    if (aluno.nome === nome) {
      return {
        ...aluno,
        nota: novaNota,
      };
    }
    return aluno;
  });
}

const notaAtualizada = atualizarNota(turma, "Leno", 10);
//console.log(notaAtualizada)

function removerAluno(alunos: Aluno[], nome: string) {
  const alunoExistente = alunos.some((aluno) => aluno.nome === nome);

  if (!alunoExistente) {
    return "Aluno não encontrado";
  }

  return alunos.filter((aluno) => aluno.nome !== nome);
}

//console.log(removerAluno(turma, "Pedro"));

function cadastrarAluno(alunos: Aluno[], novoAluno: Aluno) {

  const alunoExiste = alunos.some(
    (aluno) => aluno.nome === novoAluno.nome
  );

  if (alunoExiste) {
    return "Aluno já cadastrado";
  }

  return [...alunos, novoAluno];
}

const novaTurma = cadastrarAluno(turma, {
  nome: "Carlos",
  nota: 5
});

//console.log(novaTurma);

function mediaDaTurma(turma: Aluno[]){
  const quantidadeDeAlunos = turma.length
  const somarNotas = turma.reduce((total, aluno) => total + aluno.nota, 0);
  return somarNotas / quantidadeDeAlunos;
}

const media = mediaDaTurma(turma);
//console.log(media);

function maiorNota(turma: Aluno[]){
  return turma.reduce((maior, aluno) => 
    aluno.nota > maior.nota ? aluno : maior
)}

const melhorAluno = maiorNota(turma);
//console.log(melhorAluno)

function ordenarPorNota(turma: Aluno[]){
  return turma.sort((a, b) => {
    return a.nota - b.nota
  })
}

const turmaOrdenada = ordenarPorNota(turma);
//console.log(turmaOrdenada)

function top3Alunos(turma: Aluno[]){
  return turma
    .sort((a, b) => b.nota - a.nota)
    .slice(0,3);
}

const topAlunos = top3Alunos(turma);
console.log(topAlunos)