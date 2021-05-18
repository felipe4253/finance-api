"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const investimento_service_1 = require("./src/models/service/investimento-service");
const investimentoService = new investimento_service_1.InvestimentoService();
const app = express_1.default();
const PORT = 8000;
app.get('/', (req, res) => res.send('API De Finanças'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
app.get("/investimento/renda-fixa", (req, res, next) => {
    res.json(investimentoService.getInvestimentosRendaFixa());
});
app.get("/investimento/reserva-emergencia", (req, res, next) => {
    res.json([""]);
});
app.get("/investimento/renda-variavel", (req, res, next) => {
    res.json([""]);
});
