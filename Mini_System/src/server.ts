import express from "express";
import { production } from "./data/orders";

const app = express();

app.get("/", (req, res) => {
  res.send("Production Control API");
});

app.get("/orders", (req, res) => {
  res.json(production);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});