import { Injectable } from '@nestjs/common';
import { TaskCreateDto, TaskUpdateDto } from 'src/core/dtos';
import { Task } from '../../../core/models';

@Injectable()
export class TaskFactoryService {
  createTask({ title, description }: TaskCreateDto) {
    return new Task(title, description);
  }
  updateTask({ title, description, completed, important }: TaskUpdateDto) {
    return new Task(title, description, completed, important);
  }
}
