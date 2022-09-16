import { Router } from 'express';
import { adminAuthControllers } from '../controllers/adminAuthControllers';
import validate from '../middlewares/validateResource';
import { loginSchema } from '../schemas/authScheme';

const router = Router();

router.post('/', validate(loginSchema), adminAuthControllers.login);
router.get('/refresh', adminAuthControllers.refresh);
router.post('/logout', adminAuthControllers.logout);

export default router;
