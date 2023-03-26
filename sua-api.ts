import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import config from 'config';

const app = express();

// Adicione o middleware Morgan para registrar as solicitações HTTP no console
app.use(morgan('tiny'));

// Configure o banco de dados do MongoDB
const dbConfig = config.get('dbConfig');
mongoose.connect(dbConfig.uri, dbConfig.options)
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.log('Erro ao conectar com o MongoDB', err));

// Adicione as rotas da sua API
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de filmes!');
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});