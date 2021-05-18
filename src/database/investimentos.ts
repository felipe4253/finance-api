import { Investimento } from "../models/investimento";

const {getDatabase} = require('./mongo');

const collectionName = 'investimentos';

async function insertInvestimento(investimento:Investimento) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(investimento);
  return insertedId;
}

async function getInvestimentos() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
  insertInvestimento,
  getInvestimentos,
};