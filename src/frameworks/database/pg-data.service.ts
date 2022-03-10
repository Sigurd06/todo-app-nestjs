import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IDatabaseAbstract } from 'src/core/abstracts';
import { Repository } from 'typeorm';
import { SubTasks, Tasks } from './entities';
import { PgSubTaskRepository, PgTaskRepository } from './repositories';

@Injectable()
export class PgDatabaseService
  implements IDatabaseAbstract, OnApplicationBootstrap
{
  public tasks: PgTaskRepository<Tasks>;
  public subTasks: PgSubTaskRepository<SubTasks>;

  constructor(
    @InjectRepository(Tasks)
    private readonly taskRepository: Repository<Tasks>,

    @InjectRepository(SubTasks)
    private readonly subTaskRepository: Repository<SubTasks>,
  ) {}

  public onApplicationBootstrap() {
    this.tasks = new PgTaskRepository<Tasks>(this.taskRepository);
    this.subTasks = new PgSubTaskRepository<SubTasks>(this.subTaskRepository);
  }
}
