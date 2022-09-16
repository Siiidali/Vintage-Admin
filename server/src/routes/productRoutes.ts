import { Router } from 'express';
import { productControllers } from '../controllers/productControllers';
import { verifyJWT } from '../middlewares/verifyJWT';

const router = Router();

router.get('/', productControllers.getProducts);
router.get('/:id', productControllers.getProduct);
router.post('/', verifyJWT, productControllers.createProduct);
router.patch('/', verifyJWT, productControllers.updateProduct);
router.delete('/:id', verifyJWT, productControllers.deleteProduct);

export default router;
