import { Router } from 'express';
import { userControllers } from '../controllers/userControllers';
const router = Router();

router.get('/', userControllers.getUsers);
router.get('/:id', userControllers.getUser);
router.post('/', userControllers.createUser);
router.patch('/', userControllers.updateUser);
router.delete('/', userControllers.deleteUser);

export default router;
