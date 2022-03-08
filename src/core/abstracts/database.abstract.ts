import { Task } from '../models';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDatabaseAbstract {
  public abstract readonly task: IGenericRepository<Task>;
}
