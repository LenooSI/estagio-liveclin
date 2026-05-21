const turma = [
  { nome: "Leno", nota: 8 },
  { nome: "Maria", nota: 5 },
  { nome: "João", nota: 9 },
  { nome: "Ana", nota: 6 },
];

type aluno = {
  nome: string;
  nota: number;
};

type matricula = {
  nome: string;
  nota: number;
  status: string;
};

function alunosAprovados(alunos: aluno[]) {
  let aprovados: matricula[] = [];

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

function alunosMatriculados(alunos: aluno[]) {
  let estudantes: matricula[] = [];

  alunos.forEach((aluno) => {
    const status = aluno.nota >= 6 ? "Aprovado" : "Reprovado";

    estudantes.push({
      nome: aluno.nome,
      nota: aluno.nota,
      status,
    });
  });

  return estudantes;
}

//console.log(alunosMatriculados(alunos))

function buscarAluno(alunos: aluno[], nome: string) {
  const matriculado = alunos.find((aluno) => aluno.nome === nome);

  return matriculado || "Aluno não encontrado";
}

//console.log(buscarAluno(turma, "Leno"))

function atualizarNota(aluno: aluno[], nome: string, novaNota: number) {
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

function removerAluno(alunos: aluno[], nome: string) {
  const alunoExistente = alunos.some((aluno) => aluno.nome === nome);

  if (!alunoExistente) {
    return "Aluno não encontrado";
  }

  return alunos.filter((aluno) => aluno.nome !== nome);
}

console.log(removerAluno(turma, "Pedro"));
