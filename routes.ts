import { Router } from "express";
import { deleteCustomer, getAll, postCustomer, updateCustomer } from "./src/controllers/CustomerController";

const router = Router();

router.get('/customers', getAll);
router.post('/customers', postCustomer);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);

export default router;