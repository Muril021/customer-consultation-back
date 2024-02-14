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
    type: 'enum',
    enum: ['Pessoa Física', 'Pessoa Jurídica']
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
    default: true,
    name: 'is_active'
  })
  is_active: boolean;

  @Column('simple-array')
  tel?: number[];
}