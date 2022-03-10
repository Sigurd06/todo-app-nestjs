import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
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
import { PaginationDto } from 'src/core/dtos/pagination.dto';
import { TaskSerializer, TaskSerializerById } from 'src/core/serializers';
import { TaskService } from 'src/services/use-cases/tasks/task-service.service';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @ApiOkResponse({ type: ResponseTasksDto })
  public async findAll(@Query() pagination: PaginationDto) {
    const { results, totalPages, totalResults } =
      await this.taskService.findAll(pagination);

    const taskSerializes: TaskSerializer[] = [];

    for (const iterator of results) {
      taskSerializes.push(
        plainToClass(TaskSerializer, iterator, {
          excludeExtraneousValues: true,
        }),
      );
    }
    return {
      results: taskSerializes,
      totalPages,
      totalResults,
    };
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
    await this.taskService.updateTask(id, body);
    return 'task updated successfully';
  }

  @Delete(':id')
  @ApiOkResponse({ type: ResponseForUpdateOrDelete })
  public async deleteTask(@Param('id') id: string) {
    await this.taskService.deleteTask(id);
    return 'task deleted successfully';
  }
}
