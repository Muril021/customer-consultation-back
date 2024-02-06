import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: string | number;

  @Column({ nullable: false })
  name: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50
  })
  type: string;

  @Column({ nullable: false })
  doc: number;

  @Column({
    nullable: false,
    type: 'timestamp',
    name: 'date',
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  date: Date;

  @Column({
    nullable: false,
    default: false,
    name: 'is_active'
  })
  is_active: boolean;

  @Column('simple-array')
  tel: string[];
}