import express from "express";
import { getLaptops } from "./scraper.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/laptops/lenovo", async (req, res) => {
  const laptops = await getLaptops();
  res.json(laptops);
});

app.get("/", (req, res) => {
  res.send("Lenovo Scraper API");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
