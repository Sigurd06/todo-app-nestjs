import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TaskCreateDto, TaskUpdateDto } from 'src/core/dtos';
import { TaskService } from 'src/services/use-cases/tasks/task-service.service';

@ApiTags('Tasks')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  public async findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  public async findById(@Param('id') id: string) {
    return this.taskService.findById(id);
  }

  @Post()
  public async create(@Body() body: TaskCreateDto) {
    return this.taskService.createTask(body);
  }

  @Put(':id')
  public async updateTask(
    @Param('id') id: string,
    @Body() body: TaskUpdateDto,
  ) {
    this.taskService.updateTask(id, body);
  }

  @Delete(':id')
  public async deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
  }
}
