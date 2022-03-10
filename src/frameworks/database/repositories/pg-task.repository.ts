import { ITaskRepository } from 'src/core/abstracts';
import { PgGenericRepository } from './pg-generic.repository';

export class PgTaskRepository<T>
  extends PgGenericRepository<T>
  implements ITaskRepository<T> {}
