import { Router } from 'express';
import userRoute from './user.route';

const router = Router();

router.get('/', (request, response) => response.json({ message: 'Hello World!' }))

router.use(userRoute);

export default router;