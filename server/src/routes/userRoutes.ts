import { Router } from 'express';
import { userControllers } from '../controllers/userControllers';
import { verifyJWT } from '../middlewares/verifyJWT';

const router = Router();

router.get('/', verifyJWT, userControllers.getUsers);
router.get('/:id', verifyJWT, userControllers.getUser);
router.post('/', userControllers.createUser);
router.patch('/', verifyJWT, userControllers.updateUser);
router.delete('/:id', verifyJWT, userControllers.deleteUser);

export default router;
