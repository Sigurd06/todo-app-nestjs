import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

export class TaskUpdateDto extends PartialType(TaskCreateDto) {}
