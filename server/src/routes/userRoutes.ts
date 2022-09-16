import { Router } from 'express';
import { userControllers } from '../controllers/userControllers';
import validate from '../middlewares/validateResource';
import { verifyJWT } from '../middlewares/verifyJWT';
import { createNewUserSchema, updateUserSchema } from '../schemas/userSchema';

const router = Router();

router.get('/', verifyJWT, userControllers.getUsers);
router.get('/:id', verifyJWT, userControllers.getUser);
router.post('/', validate(createNewUserSchema), userControllers.createUser);
router.patch(
  '/',
  verifyJWT,
  validate(updateUserSchema),
  userControllers.updateUser
);
router.delete('/:id', verifyJWT, userControllers.deleteUser);

export default router;
