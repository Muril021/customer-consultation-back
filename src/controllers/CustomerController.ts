import { Request, Response } from "express";
import { createCustomer, deleteById, findAllCustomers, updateById } from "../services/CustomerService";

export async function getAll(req: Request, res: Response) {
  try {
    const customers = await findAllCustomers();

    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function postCustomer(req: Request, res: Response) {
  try {
    const newCustomer = await createCustomer(req.body);

    return res.status(201).json(newCustomer);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function updateCustomer(req: Request, res: Response) {
  try {
    await updateById(req.params.id, req.body);

    return res.status(200).json({
      message: `Customer ID ${req.params.id} updated successfully.`
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function deleteCustomer(req: Request, res: Response) {
  try {
    await deleteById(req.params.id);

    return res.status(200).json({
      message: `Customer ID ${req.params.id} removed successfully.`
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}