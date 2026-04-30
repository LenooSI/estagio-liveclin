import { Request, Response } from "express";

type Usuario = {
  nome: string;
  idade: number;
};

let usuarios: Usuario[] = [
  { nome: "Leno", idade: 26 },
  { nome: "Maria", idade: 17 },
];

export function listarUsuarios(req: Request, res: Response) {
  return res.json(usuarios);
}

export function criarUsuario(req: Request, res: Response) {
  const { nome, idade } = req.body;

  if (!nome || !idade) {
    return res.status(400).json({ erro: "Nome e idade são obrigatórios" });
  }

  const novoUsuario: Usuario = { nome, idade };
  usuarios.push(novoUsuario);

  return res.status(201).json(novoUsuario);
}

export function atualizarUsuario(req: Request, res: Response) {
  const nome = req.params.nome;
  const { idade } = req.body;

  const usuario = usuarios.find((u) => u.nome === nome);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  if (!idade) {
    return res.status(400).json({ erro: "Idade é obrigatória" });
  }

  usuario.idade = idade;

  return res.json(usuario);
}

export function deletarUsuario(req: Request, res: Response) {
  const nome = req.params.nome;

  const index = usuarios.findIndex((u) => u.nome === nome);

  if (index === -1) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  const removido = usuarios.splice(index, 1);

  return res.json({
    mensagem: "Usuário removido",
    usuario: removido[0],
  });
}