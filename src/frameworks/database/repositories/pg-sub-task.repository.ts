import { ISubTaskRepository } from 'src/core/abstracts';
import { PgGenericRepository } from './pg-generic.repository';

export class PgSubTaskRepository<T>
  extends PgGenericRepository<T>
  implements ISubTaskRepository<T>
{
  public findSubTasks(parent: string): Promise<T[]> {
    return this._repository.find({
      relations: ['parentTask'],
      where: {
        parentTask: parent,
      },
    });
  }
}
