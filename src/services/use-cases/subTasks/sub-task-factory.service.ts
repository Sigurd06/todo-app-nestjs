import { Injectable } from '@nestjs/common';
import { SubTaskCrateDto } from 'src/core/dtos';
import { SubTask, Task } from '../../../core/models';

@Injectable()
export class SubTaskFactoryService {
  createSubTask(
    { title }: SubTaskCrateDto,
    parentTask: Task,
    completed: boolean = false,
  ) {
    return new SubTask(title, completed, parentTask);
  }
}
