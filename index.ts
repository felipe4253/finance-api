import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import { InvestimentoService } from './src/service/investimento-service';

const { startDatabase } = require('./src/database/mongo');
const { insertInvestimento, getInvestimentos } = require('./src/database/investimentos');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const morgan = require('morgan');
const cors = require('cors');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const investimentoService = new InvestimentoService();
const app = express();
const PORT = 8000;

/** INICIANDO CONFIGURACOES */
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

startDatabase().then(async () => {
  await insertInvestimento({title: 'Hello, now from the in-memory database!'});

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
});

/**
 * SWAGGER
 * =========================
 */
 const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finanças API",
      version: "0.1.0",
      description:
        "API de investimentos entregue como trabalho final do curso de arquitetura de web services",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Felipe Silva",
        email: "felipe4253@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8000/",
      },
    ],
  },
  apis: ["./index.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// ============================


/** para controle de num de requisições por ip */
const requestIp = require('request-ip');
app.use(requestIp.mw())


/** ROTAS ABERTAS*/
app.get('/', async (req:any, res:any) => {
  console.log(req.clientIp);
  res.send(await getInvestimentos())
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


/** ROTAS FECHADAS/PROTEGIDAS */
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-5r68kmq6.us.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'financas-api',
  issuer: `https://dev-5r68kmq6.us.auth0.com/`,
  algorithms: ['RS256']
});

app.use(checkJwt);
app.get("/investimento/renda-variavelaaa", (req, res, next) => {
  res.json(investimentoService.getInvestimentosRendaVariavel());
});