import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false, name: 'owner_id' })
  ownerId: string;

  @Column({ nullable: false, name: 'category_id' })
  categoryId: string;

  @Column({ nullable: false, type: 'float' })
  price: number;

  @Column({ nullable: false })
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;
}
