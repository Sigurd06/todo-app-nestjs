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
  ResponseCreateSubTaskDto,
  ResponseForUpdateOrDelete,
  ResponseSubtaskCreateDto,
  SubTaskCrateDto,
  UpdateSubTaskDto,
} from 'src/core/dtos';
import { SubTaskSerializer } from 'src/core/serializers/sub-task.serializer';
import { SubTaskService } from 'src/services/use-cases/subTasks/sub-task-service.service';

@ApiTags('Sub Tasks')
@Controller('sub-tasks')
export class SubTasksController {
  constructor(private readonly subTaskService: SubTaskService) {}

  @Get(':parentTask')
  @ApiOkResponse({ type: ResponseSubtaskCreateDto })
  public async findAllSubTask(@Param('parentTask') parentTask: string) {
    const allSubTask = await this.subTaskService.findAll(parentTask);
    const subTaskSerializes: SubTaskSerializer[] = [];

    for (const iterator of allSubTask) {
      subTaskSerializes.push(
        plainToClass(SubTaskSerializer, iterator, {
          excludeExtraneousValues: true,
        }),
      );
    }

    return subTaskSerializes;
  }

  @Post(':parentTask')
  @ApiOkResponse({ type: ResponseCreateSubTaskDto })
  public async createSubTask(
    @Param('parentTask') parentTask: string,
    @Body() body: SubTaskCrateDto,
  ) {
    const subTask = await this.subTaskService.createSubTask(body, parentTask);
    return plainToClass(SubTaskSerializer, subTask, {
      excludeExtraneousValues: true,
    });
  }

  @Put(':id')
  @ApiOkResponse({ type: ResponseForUpdateOrDelete })
  public async updateSubTask(
    @Param('id') id: string,
    @Body() body: UpdateSubTaskDto,
  ) {
    await this.subTaskService.updateSubTask(id, body);
    return 'Sub Task updated successfully';
  }

  @Delete(':id')
  @ApiOkResponse({ type: ResponseForUpdateOrDelete })
  public async deleteSubTask(@Param('id') id: string) {
    await this.subTaskService.deleteSubTask(id);
    return 'Sub Task deleted successfully';
  }
}
