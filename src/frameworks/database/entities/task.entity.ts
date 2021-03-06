import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { SubTasks } from './sub-task.entity';

@Entity('tasks')
export class Tasks {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @Column()
  public readonly title: string;

  @Column({ nullable: false })
  public readonly description: string;

  @Column({ default: false })
  public readonly completed: boolean;

  @Column({ default: false })
  public readonly important: boolean;

  @OneToMany((_) => SubTasks, (subTask) => subTask.parentTask, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  public readonly tasksChildren: SubTasks[];

  @CreateDateColumn()
  public readonly createdAt: Date;

  @UpdateDateColumn()
  public readonly updatedAt: Date;

  @DeleteDateColumn()
  public readonly deletedAt: Date;
}
