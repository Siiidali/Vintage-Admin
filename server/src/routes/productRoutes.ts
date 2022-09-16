import { Router } from 'express';
import { productControllers } from '../controllers/productControllers';
import validate from '../middlewares/validateResource';
import { verifyJWT } from '../middlewares/verifyJWT';
import { createProductSchema } from '../schemas/productSchema';

const router = Router();

router.get('/', productControllers.getProducts);
router.get('/:id', productControllers.getProduct);
router.post(
  '/',
  verifyJWT,
  validate(createProductSchema),
  productControllers.createProduct
);
router.patch(
  '/',
  verifyJWT,
  validate(createProductSchema),
  productControllers.updateProduct
);
router.delete('/:id', verifyJWT, productControllers.deleteProduct);

export default router;
