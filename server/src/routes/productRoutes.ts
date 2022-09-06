import { Router } from 'express';
import { productControllers } from '../controllers/productControllers';

const router = Router();

router.get('/', productControllers.getProducts);
router.get('/:id', productControllers.getProduct);
router.post('/', productControllers.createProduct);
router.patch('/', productControllers.updateProduct);
router.delete('/', productControllers.deleteProduct);

export default router;
