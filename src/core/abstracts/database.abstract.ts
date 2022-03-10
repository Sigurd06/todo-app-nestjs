import { Task } from '../models';
import { ITaskRepository } from './task-reposotiry.abstract';

export abstract class IDatabaseAbstract {
  public abstract readonly task: ITaskRepository<Task>;
}
