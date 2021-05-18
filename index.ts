import express from 'express';
import { InvestimentoService } from './src/service/investimento-service';

const investimentoService = new InvestimentoService();
const app = express();
const PORT = 8000;

app.get('/', (req, res) => res.send('API De Finanças'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.get("/investimento/renda-fixa", (req, res, next) => {
    res.json(investimentoService.getInvestimentosRendaFixa());
   });

app.get("/investimento/reserva-emergencia", (req, res, next) => {
  res.json(investimentoService.getInvestimentosReservaEmergencia());
});

app.get("/investimento/renda-variavel", (req, res, next) => {
  res.json(investimentoService.getInvestimentosRendaVariavel());
});