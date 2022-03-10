import { ITaskRepository } from 'src/core/abstracts';
import { PgGenericRepository } from './pg-generic.repository';

export class PgTaskRepository<T>
  extends PgGenericRepository<T>
  implements ITaskRepository<T>
{
  public findAllPaginate(
    page: number,
    quantity: number,
  ): Promise<[T[], number]> {
    return this._repository
      .createQueryBuilder('tasks')
      .limit(quantity)
      .offset(quantity * (page - 1))
      .orderBy('tasks.createdAt', 'DESC')
      .getManyAndCount();
  }
}
