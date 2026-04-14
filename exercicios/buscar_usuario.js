let usuarios = [
  { nome: "Leno", idade: 26, ativo: true },
  { nome: "Maria", idade: 17, ativo: false },
  { nome: "João", idade: 30, ativo: true },
  { nome: "Ana", idade: 15, ativo: true },
];

function exibirUsuarios(usuarios) {
  console.log(
    `${usuarios.nome} tem ${usuarios.idade} anos - status: ${usuarios.ativo}`,
  );
}

for (let i = 0; i < usuarios.length; i++) {
  exibirUsuarios(usuarios[i]);
}
console.log(
  "---------------------------------------------------------------------------",
);

console.log("Usuários maiores de idade:");
function maiorDeIdade(usuarios) {
  return usuarios.idade >= 18;
}

let maiores = usuarios.filter(maiorDeIdade);
console.log(maiores);
console.log(
  "---------------------------------------------------------------------------",
);

console.log("Usuários ativos:");
function usuariosAtivos(usuarios) {
  return usuarios.ativo;
}

let ativos = usuarios.filter(usuariosAtivos);
console.log(ativos);
console.log(
  "---------------------------------------------------------------------------",
);

let nomes = ativos.map((u) => u.nome);
console.log(nomes);
console.log(
  "---------------------------------------------------------------------------",
);

let totalUsuarios = usuarios.reduce((acc, u) => acc + (u.ativo ? 1 : 0), 0);
console.log(`Total de usuários ativos: ${totalUsuarios}`);
