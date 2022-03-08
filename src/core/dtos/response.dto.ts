import { ApiProperty } from '@nestjs/swagger';

export class ResponseFormat<T> {
  @ApiProperty()
  public isArray: boolean;
  @ApiProperty()
  public path: string;
  @ApiProperty()
  public duration: string;
  @ApiProperty()
  public method: string;
  @ApiProperty()
  public code: number;

  public data: T;
}

export class ResponseBadRequestFormat {
  @ApiProperty()
  public code: number;
  @ApiProperty()
  public timestamp: Date;
  @ApiProperty()
  public path: string;
  @ApiProperty()
  public message: string;
}

export class ResponseForUpdateOrDelete extends ResponseFormat<any> {
  @ApiProperty()
  public data: string;
}
