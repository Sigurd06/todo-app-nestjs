import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column()
  public readonly title: string;

  @Column({ nullable: false })
  public readonly description: string;

  @CreateDateColumn()
  public readonly createdAt: Date;

  @UpdateDateColumn()
  public readonly updatedAt: Date;

  @DeleteDateColumn()
  public readonly deletedAt: Date;
}