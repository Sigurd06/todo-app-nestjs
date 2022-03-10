import { Task } from './task.model';

export class SubTask {
  public readonly id?: string;
  public readonly title: string;
  public readonly completed?: boolean;
  public readonly parentTask: Task;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
  public readonly deletedAt?: Date;

  constructor(title: string, completed: boolean = false, parentTask: Task) {
    this.title = title;
    this.completed = completed;
    this.parentTask = parentTask;
  }
}
