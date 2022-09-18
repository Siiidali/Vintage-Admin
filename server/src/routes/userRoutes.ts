import { Router } from 'express';
import { userControllers } from '../controllers/userControllers';
import validate from '../middlewares/validateResource';
import { verifyJWT } from '../middlewares/verifyJWT';
import { createNewUserSchema, updateUserSchema } from '../schemas/userSchema';

const router = Router();

router.get('/', userControllers.getUsers);
router.get('/:id', userControllers.getUser);
router.post('/', validate(createNewUserSchema), userControllers.createUser);
router.patch('/', [validate(updateUserSchema)], userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);

export default router;
