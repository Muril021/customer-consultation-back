import { Router } from "express";
import CustomerController from "./src/controllers/CustomerController";

const router = Router();

router.get('/customers', CustomerController.getAll);
router.post('/customers', CustomerController.postCustomer);
router.put('/customers/:id', CustomerController.updateCustomer);
router.delete('/customers/:id', CustomerController.deleteCustomer);

export default router;