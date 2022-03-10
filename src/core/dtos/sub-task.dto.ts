import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { SubTaskSerializer } from '../serializers/sub-task.serializer';
import { ResponseFormat } from './response.dto';

export class SubTaskCrateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public readonly title: string;
}

export class UpdateSubTaskDto extends PartialType(SubTaskCrateDto) {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public readonly completed: boolean;
}

export class ResponseSubtaskCreateDto extends ResponseFormat<any> {
  @ApiProperty({ type: [SubTaskSerializer] })
  data: SubTaskSerializer;
}

export class ResponseCreateSubTaskDto extends ResponseFormat<any> {
  @ApiProperty()
  data: SubTaskSerializer;
}
