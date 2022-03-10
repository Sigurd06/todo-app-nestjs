import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class SubTaskSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  completed: string;
}
