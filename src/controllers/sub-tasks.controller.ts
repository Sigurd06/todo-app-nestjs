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
import { SubTaskCrateDto, UpdateSubTaskDto } from 'src/core/dtos';
import { SubTaskService } from 'src/services/use-cases/subTasks/sub-task-service.service';

@ApiTags('Sub Tasks')
@Controller('sub-tasks')
export class SubTasksController {
  constructor(private readonly subTaskService: SubTaskService) {}

  @Get(':parentTask')
  public async findAllSubTask(@Param('parentTask') parentTask: string) {
    return this.subTaskService.findAll(parentTask);
  }

  @Post(':parentTask')
  public async createSubTask(
    @Param('parentTask') parentTask: string,
    @Body() subTask: SubTaskCrateDto,
  ) {
    return this.subTaskService.createSubTask(subTask, parentTask);
  }

  @Put(':id')
  public async updateSubTask(
    @Param('id') id: string,
    @Body() body: UpdateSubTaskDto,
  ) {
    await this.subTaskService.updateSubTask(id, body);
    return 'Sub Task updated successfully';
  }

  @Delete(':id')
  public async deleteSubTask(@Param('id') id: string) {
    await this.subTaskService.deleteSubTask(id);
    return 'Sub Task deleted successfully';
  }
}
