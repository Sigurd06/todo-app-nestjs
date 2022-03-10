import { IGenericRepository } from './generic-repository.abstract';

export abstract class ISubTaskRepository<T> extends IGenericRepository<T> {
  public abstract findSubTasks(parent: string): Promise<T[]>;
}
