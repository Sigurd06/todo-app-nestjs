import { Injectable } from '@nestjs/common';
import { ExceptionsService } from 'src/configuration/exceptions/exceptions.service';
import { IDatabaseAbstract } from 'src/core/abstracts';
import { TaskCreateDto, TaskUpdateDto } from 'src/core/dtos';
import { TaskFactoryService } from './task-factory.service';

@Injectable()
export class TaskService {
  constructor(
    private readonly exception: ExceptionsService,
    private readonly databaseService: IDatabaseAbstract,
    private readonly taskFactoryService: TaskFactoryService,
  ) {}

  public async findAll() {
    const allTask = await this.databaseService.tasks.findAll();
    if (!allTask)
      this.exception.notFoundException({ message: 'Tasks not founded' });
    return allTask;
  }

  public async findById(id: string) {
    const task = await this.databaseService.tasks.findById(id);
    if (!task) {
      this.exception.notFoundException({ message: 'Task not found' });
    }
    return task;
  }

  public async createTask(taskCreateDto: TaskCreateDto) {
    const task = this.taskFactoryService.createTask(taskCreateDto);
    return this.databaseService.tasks.create(task);
  }

  public async updateTask(id: string, item: TaskUpdateDto) {
    const task = await this.findById(id);
    this.databaseService.tasks.update(task.id, item);
  }

  public async deleteTask(id: string) {
    const task = await this.findById(id);
    this.databaseService.tasks.delete(task.id);
  }
}
