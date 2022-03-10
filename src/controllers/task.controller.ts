import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToClass } from 'class-transformer';
import {
  ResponseTaskByIdDto,
  ResponseTasksDto,
  ResposeCreateTaskDto,
  TaskCreateDto,
  TaskUpdateDto,
  ResponseForUpdateOrDelete,
} from 'src/core/dtos';
import { TaskSerializer, TaskSerializerById } from 'src/core/serializers';
import { TaskService } from 'src/services/use-cases/tasks/task-service.service';

@ApiTags('Tasks')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @ApiOkResponse({ type: ResponseTasksDto })
  public async findAll() {
    const allTask = await this.taskService.findAll();

    const taskSerializes: TaskSerializer[] = [];

    for (const iterator of allTask) {
      taskSerializes.push(
        plainToClass(TaskSerializer, iterator, {
          excludeExtraneousValues: true,
        }),
      );
    }
    return taskSerializes;
  }

  @Get(':id')
  @ApiOkResponse({ type: ResponseTaskByIdDto })
  public async findById(@Param('id') id: string) {
    const task = await this.taskService.findById(id);

    return plainToClass(TaskSerializerById, task, {
      excludeExtraneousValues: true,
    });
  }

  @Post()
  @ApiOkResponse({ type: ResposeCreateTaskDto })
  public async create(@Body() body: TaskCreateDto) {
    const taskCreated = await this.taskService.createTask(body);

    return plainToClass(TaskSerializer, taskCreated, {
      excludeExtraneousValues: true,
    });
  }

  @Put(':id')
  @ApiOkResponse({ type: ResponseForUpdateOrDelete })
  public async updateTask(
    @Param('id') id: string,
    @Body() body: TaskUpdateDto,
  ) {
    this.taskService.updateTask(id, body);
    return 'task updated successfully';
  }

  @Delete(':id')
  @ApiOkResponse({ type: ResponseForUpdateOrDelete })
  public async deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
    return 'task deleted successfully';
  }
}
