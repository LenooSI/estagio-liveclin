import { Request, Response } from "express";

export async function getGitHubUser(req: Request, res: Response) {
  const usuario = req.query.user || "SEU_USUARIO"; // pode passar ?user=usuario pela URL
    console.log (req.query)

  try {
    const userDatalsResponse = await fetch(`https://api.github.com/users/${usuario}`, {
      headers: { "User-Agent": "Node.js" }
    });
    const userRepositoriesResponse = await fetch(`https://api.github.com/users/${usuario}/repos`, {
        headers: { "User-Agent": "Node.js" }
      });
    const jsonUserDatalsResponse = await userDatalsResponse.json();
    const { name, login, bio, public_repos, html_url } = jsonUserDatalsResponse;

    res.json({
      nome: name,
      usuario: login,
      bio,
      repositorios_publicos: public_repos,
      perfil: html_url,
      fullResponse: jsonUserDatalsResponse
    });
  } catch (error) {
    res.status(500).json({ erro: "Não foi possível buscar o usuário do GitHub." });
  }
}
