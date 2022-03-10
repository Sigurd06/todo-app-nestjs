import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
