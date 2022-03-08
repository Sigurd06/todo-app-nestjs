import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IDatabaseAbstract } from 'src/core/abstracts';
import { Repository } from 'typeorm';
import { Task } from './entities';
import { PgGenericRepository } from './pg-generic.repository';

@Injectable()
export class PgDatabaseService
  implements IDatabaseAbstract, OnApplicationBootstrap
{
  public task: PgGenericRepository<Task>;

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  public onApplicationBootstrap() {
    this.task = new PgGenericRepository<Task>(this.taskRepository);
  }
}
