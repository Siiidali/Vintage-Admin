import { Router } from 'express';
import { authControllers } from '../controllers/authControllers';
import validate from '../middlewares/validateResource';
import { loginSchema } from '../schemas/authScheme';
const router = Router();

router.post('/', validate(loginSchema), authControllers.login);
router.get('/refresh', authControllers.refresh);
router.post('logout', authControllers.logout);

export default router;
