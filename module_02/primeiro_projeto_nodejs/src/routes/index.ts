import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
// Toda rota que iniciar com /appointment vai repassar o que vem após appointments
// para dentro do appointmentsRouter(as rotas serao tratadas la no outro arquivo)

export default routes;
