import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
// Toda rota que iniciar com /appointment vai repassar o que vem após appointments
// para dentro do appointmentsRouter(as rotas serao tratadas la no outro arquivo)

export default routes;
