import { Router } from 'express';
import { orderControllers } from '../controllers/orderControllers';
import { verifyJWT } from '../middlewares/verifyJWT';
const router = Router();

router.use(verifyJWT);

router.get('/', orderControllers.getOrders);
router.get('/:id', orderControllers.getOrder);
router.get('/', orderControllers.newOrder);
router.get('/', orderControllers.updateOrder);
router.get('/', orderControllers.deleteOrder);

export default router;
