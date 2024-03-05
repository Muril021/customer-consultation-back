import { Customer } from "../entities/Customer";
import CustomerRepository from "../repositories/CustomerRepository";

class CustomerService {
  findAllCustomers() {
    return CustomerRepository.findAll();
  }

  findById(id: string | number) {
    return CustomerRepository.findById(id);
  }
  
  createCustomer(data: Customer) {
    return CustomerRepository.create(data);
  }
  
  updateById(id: string | number, data: Customer) {
    return CustomerRepository.update(id, data);
  }
  
  deleteById(id: string | number) {
    return CustomerRepository.delete(id);
  }
}

export default new CustomerService;