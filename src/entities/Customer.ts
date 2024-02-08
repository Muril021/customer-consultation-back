import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: string | number;

  @Column({ nullable: false })
  @IsNotEmpty()
  name: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 50
  })
  @IsNotEmpty()
  type: string;

  @Column({ nullable: false })
  @IsNotEmpty()
  doc: string;

  @Column({
    type: 'timestamp',
    name: 'date',
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  @IsNotEmpty()
  date?: Date;

  @Column({
    nullable: false,
    default: false,
    name: 'is_active'
  })
  is_active: boolean;

  @Column('simple-array')
  tel?: number[];
}