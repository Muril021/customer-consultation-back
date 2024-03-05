import { Request, Response } from "express";
import CustomerService from "../services/CustomerService";
import { validationResult } from "express-validator";

class CustomerController {
  async getAll(req: Request, res: Response) {
    try {
      const customers = await CustomerService.findAllCustomers();
  
      return res.status(200).json(customers);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const customer = await CustomerService.findById(req.params.id);

      return res.status(200).json(customer);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  
  async postCustomer(req: Request, res: Response) {
    try {
      const error = validationResult(req);
      if (error.isEmpty() === false) {
        return res.status(400).json({
          message: error
        });
      }

      const newCustomer = await CustomerService.createCustomer(req.body);
  
      return res.status(201).json(newCustomer);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  
  async updateCustomer(req: Request, res: Response) {
    try {
      const error = validationResult(req);
      if (error.isEmpty() === false) {
        return res.status(400).json({
          message: error
        });
      }

      await CustomerService.updateById(req.params.id, req.body);
  
      return res.status(200).json({
        message: `Customer ID ${req.params.id} updated successfully.`
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  
  async deleteCustomer(req: Request, res: Response) {
    try {
      await CustomerService.deleteById(req.params.id);
  
      return res.status(200).json({
        message: `Customer ID ${req.params.id} removed successfully.`
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new CustomerController;