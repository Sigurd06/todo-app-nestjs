import { SubTask, Task } from '../models';
import { ISubTaskRepository } from './sub-task-repository.abstract';
import { ITaskRepository } from './task-reposotiry.abstract';

export abstract class IDatabaseAbstract {
  public abstract readonly tasks: ITaskRepository<Task>;
  public abstract readonly subTasks: ISubTaskRepository<SubTask>;
}
