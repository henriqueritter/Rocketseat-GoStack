import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes); // middleware deixando todas as rotas passando por aqui antes

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
