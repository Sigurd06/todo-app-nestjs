import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TaskSerializer, TaskSerializerById } from '../serializers';
import { ResponseFormat } from './response.dto';

export class TaskCreateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  public description?: string;
}

export class TaskUpdateDto extends PartialType(TaskCreateDto) {
  @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  public completed: boolean;

  @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  public important: boolean;
}

export class ResposeCreateTaskDto extends ResponseFormat<any> {
  @ApiProperty()
  data: TaskSerializer;
}

class ResponseTasksPaginate {
  @ApiProperty({ type: [TaskSerializer] })
  results: TaskSerializer[];
  @ApiProperty()
  totalResults: number;
  @ApiProperty()
  totalPages: number;
}

export class ResponseTasksDto extends ResponseFormat<any> {
  @ApiProperty()
  data: ResponseTasksPaginate;
}

export class ResponseTaskByIdDto extends ResponseFormat<any> {
  @ApiProperty()
  data: TaskSerializerById;
}
