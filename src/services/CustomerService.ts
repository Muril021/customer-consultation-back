import { Customer } from "../entities/Customer";
import { MyDataSource } from "../data-source";

export async function findAllCustomers() {
  const customers = await MyDataSource
    .createQueryBuilder(Customer, 'customers')
    .getMany();

  return customers;
}

export async function createCustomer(data: Customer) {
  const newCustomer = await MyDataSource
    .createQueryBuilder()
    .insert()
    .into(Customer)
    .values(data)
    .execute();

  return newCustomer;
}

export async function updateById(id: string | number, data: Customer) {
  const updatedCustomer = await MyDataSource
    .createQueryBuilder()
    .update(Customer)
    .set(data)
    .where('id = :id', { id })
    .execute();

  return updatedCustomer;
}

export async function deleteById(id: string | number) {
  await MyDataSource
    .createQueryBuilder()
    .delete()
    .from(Customer)
    .where('id = :id', { id })
    .execute();
}