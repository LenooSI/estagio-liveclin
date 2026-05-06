const users = [
  { nome: "Leno", idade: 27, ativo: true },
  { nome: "Lubiana", idade: 23, ativo: true },
  { nome: "João", idade: 30, ativo: false },
  { nome: "Lucas", idade: 50, ativo: true },
  { nome: "Maria", idade: 17, ativo: false },
];

function listarUsuariosAtivos(usuarios) {
  const ativos = [];

  usuarios.forEach((usuario) => {
    if (usuario.ativo === true) {
      ativos.push(usuario);
    }
  });

  return ativos;
}

//const usuariosAtivos = listarUsuariosAtivos(users);
//console.log(usuariosAtivos);

function resumoUsuarios(usuarios) {
  return usuarios.map((usuario) => {
    return {
      nome: usuario.nome,
      status: usuario.ativo ? "Ativo" : "Inativo",
      maiorDeIdade: usuario.idade >= 18,
    };
  });
}

//const todosUsuarios = resumoUsuarios(users);
//console.log(todosUsuarios);

function nomesUsuarios(usuarios) {
  return usuarios.map((usuario) => {
    return usuario.nome;
  });
}

//console.log(nomesUsuarios(users))

function usuariosAtivosNomes(usuarios, listarUsuariosAtivos) {    //usando callback
  return usuarios
  const ativos = listarUsuariosAtivos(usuarios); 

  return ativos.map((usuario) => usuario.nome);
}

//const nomesUsuariosAtivos = usuariosAtivosNomes(users, listarUsuariosAtivos);
//console.log(nomesUsuariosAtivos);

function nomesDosUsuariosAtivos(usuarios){    //usando filter e map
  return usuarios
    .filter(usuario => usuario.ativo)
    .map(usuario => usuario.nome);
}

const nomesAtivos = nomesDosUsuariosAtivos(users);
console.log(nomesAtivos);