import { Router } from 'express';
import { authControllers } from '../controllers/authControllers';
const router = Router();

router.post('/', authControllers.login);
router.get('/refresh', authControllers.refresh);
router.post('logout', authControllers.logout);

export default router;
