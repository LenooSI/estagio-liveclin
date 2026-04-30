import express from "express";
import usuariosRoutes from "./routers/usuarios.routes";

const app = express();

app.use(express.json());

app.use("/usuarios", usuariosRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando 🚀");
});