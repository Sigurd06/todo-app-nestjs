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

  findAll() {
    return this.databaseService.task.findAll();
  }

  async findById(id: string) {
    const task = await this.databaseService.task.findById(id);
    if (!task) {
      this.exception.notFoundException({ message: 'Task not found' });
    }
    return task;
  }

  createTask(taskCreateDto: TaskCreateDto) {
    const task = this.taskFactoryService.createTask(taskCreateDto);
    return this.databaseService.task.create(task);
  }

  updateTask(id: string, item: TaskUpdateDto) {
    this.databaseService.task.update(id, item);
  }

  deleteTask(id: string) {
    this.databaseService.task.delete(id);
  }
}
