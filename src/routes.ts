import { Router } from "express";
import CustomerController from "./controllers/CustomerController";
import CustomerVaildation from './validations/CustomerValidation';

const router = Router();

router.get('/customers', CustomerController.getAll);
router.post('/customers', CustomerVaildation.validator, CustomerController.postCustomer);
router.put('/customers/:id', CustomerVaildation.validator, CustomerController.updateCustomer);
router.delete('/customers/:id', CustomerController.deleteCustomer);

export default router;