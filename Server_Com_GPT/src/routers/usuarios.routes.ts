import { Router } from "express";
import {
  listarUsuarios,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
} from "../controllers/usuarios.controller";

const router = Router();

router.get("/", listarUsuarios);
router.post("/", criarUsuario);
router.put("/:nome", atualizarUsuario);
router.delete("/:nome", deletarUsuario);

export default router;
/*

import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("rota funcionando");
});

export default router;*/