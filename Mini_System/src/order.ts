export type Order = {
  id: number;
  customer: string;
  sector: "Cutter" | "Polished Edge" | "Finishing";
  status: "Queue" | "Cut" | "Producing" | "Completed";
};