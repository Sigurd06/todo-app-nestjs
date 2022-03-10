import { Injectable } from '@nestjs/common';
import { ExceptionsService } from 'src/configuration/exceptions/exceptions.service';
import { IDatabaseAbstract } from 'src/core/abstracts';
import { SubTaskCrateDto, UpdateSubTaskDto } from 'src/core/dtos';
import { SubTaskFactoryService } from './sub-task-factory.service';

@Injectable()
export class SubTaskService {
  constructor(
    private readonly exception: ExceptionsService,
    private readonly databaseService: IDatabaseAbstract,
    private readonly subtaskFactory: SubTaskFactoryService,
  ) {}

  public async findById(id: string) {
    const subTask = await this.databaseService.subTasks.findById(id);
    if (!subTask)
      this.exception.notFoundException({ message: 'Sub Task not found' });
    return subTask;
  }

  public async findAll(parent: string) {
    const allSubTask = await this.databaseService.subTasks.findSubTasks(parent);
    if (!allSubTask.length)
      this.exception.notFoundException({ message: 'Sub Task not found' });
    return allSubTask;
  }

  public async createSubTask(subTaskDto: SubTaskCrateDto, parentTask: string) {
    const parent = await this.databaseService.tasks.findById(parentTask);
    if (!parent)
      this.exception.notFoundException({ message: 'Parent Task not found' });

    const subTask = this.subtaskFactory.createSubTask(subTaskDto, parent);
    return this.databaseService.subTasks.create(subTask);
  }

  public async updateSubTask(id: string, subTaskDto: UpdateSubTaskDto) {
    const subTask = await this.findById(id);
    this.databaseService.subTasks.update(subTask.id, subTaskDto);
  }

  public async deleteSubTask(id: string) {
    const subTask = await this.findById(id);
    this.databaseService.subTasks.delete(subTask.id);
  }
}
