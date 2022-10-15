import { Todo as TodoModel } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Todo implements TodoModel {
  @ApiProperty()
  id: number;

  @ApiProperty()
  todo: string;

  @ApiProperty()
  completed: boolean;

  @ApiProperty()
  deadline: Date;
}
