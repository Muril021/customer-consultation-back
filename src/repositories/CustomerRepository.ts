import { EntityTarget, Repository } from "typeorm";
import { MyDataSource } from "../data-source";
import { Customer } from "../entities/Customer";

class CustomerRepository<Entity> {
  protected readonly repository: Repository<Entity>;

  constructor(entity: EntityTarget<Entity>) {
    this.repository = MyDataSource.getRepository(entity);
  }

  async findAll() {
    const customers = await MyDataSource
    .createQueryBuilder(Customer, 'customers')
    .getMany();

    return customers;
  }

  async create(data: Customer) {
    const newCustomer = await MyDataSource
    .createQueryBuilder()
    .insert()
    .into(Customer)
    .values(data)
    .execute();

    return newCustomer;
  }

  async update(id: string | number, data: Customer) {
    const updatedCustomer = await MyDataSource
    .createQueryBuilder()
    .update(Customer)
    .set(data)
    .where('id = :id', { id })
    .execute();

    return updatedCustomer;
  }

  async delete(id: string | number) {
    await MyDataSource
    .createQueryBuilder()
    .delete()
    .from(Customer)
    .where('id = :id', { id })
    .execute();
  }
}

export default new CustomerRepository(Customer);