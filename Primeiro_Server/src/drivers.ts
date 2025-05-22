import { Request, Response } from "express";
import { drivers } from "./database/drivers";

export function listDrivers(req: Request, res: Response) {
  console.log(req.query)
  res.json({
    qtd: drivers.length,
    corredores: drivers,
  });
}
export const listDriversV2 = (req: Request, res: Response) => {};
