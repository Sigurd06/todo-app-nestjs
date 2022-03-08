import { Injectable } from '@nestjs/common';
import { TaskCreateDto } from 'src/core/dtos';
import { Task } from '../../../core/models';

@Injectable()
export class TaskFactoryService {
  createTask({ title, description }: TaskCreateDto) {
    return new Task(title, description);
  }
  updateTask({ title, description }: TaskCreateDto) {
    return new Task(title, description);
  }
}
