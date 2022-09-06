import { Router } from 'express';
import { orderControllers } from '../controllers/orderControllers';
const router = Router();

router.get('/', orderControllers.getOrders);
router.get('/:id', orderControllers.getOrder);
router.get('/', orderControllers.newOrder);
router.get('/', orderControllers.updateOrder);
router.get('/', orderControllers.deleteOrder);

export default router;
