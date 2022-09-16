import { Router } from 'express';
import { adminAuthControllers } from '../controllers/adminAuthControllers';
const router = Router();

router.post('/', adminAuthControllers.login);
router.get('/refresh', adminAuthControllers.refresh);
router.post('/logout', adminAuthControllers.logout);

export default router;
