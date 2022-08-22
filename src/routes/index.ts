import { Router } from 'express';
import carRouter from './car';

const router: Router = Router();

router.use('/cars', carRouter);

export default router;
