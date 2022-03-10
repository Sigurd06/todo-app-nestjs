import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TaskSerializer {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  completed: boolean;

  @ApiProperty()
  @Expose()
  important: boolean;
}

export class TaskSerializerById extends TaskSerializer {
  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;
}
