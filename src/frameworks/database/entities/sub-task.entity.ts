import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Tasks } from './task.entity';

@Entity('sub_tasks')
export class SubTasks {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column()
  public readonly title: string;

  @Column({ default: false })
  public readonly completed: boolean;

  @ManyToOne((_) => Tasks, (task) => task.tasksChildren, {
    onDelete: 'CASCADE',
  })
  public readonly parentTask: Tasks;

  @CreateDateColumn()
  public readonly createdAt: Date;

  @UpdateDateColumn()
  public readonly updatedAt: Date;

  @DeleteDateColumn()
  public readonly deletedAt: Date;
}
