import { Router } from "express";

const router = Router();

router.get('/customers');
router.post('/customers');
router.put('/customers/:id');
router.delete('/customers/:id');

export default router;