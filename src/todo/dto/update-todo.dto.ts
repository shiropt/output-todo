import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Todo } from '@prisma/client';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  constructor(todo: Todo) {
    super();
    this.todo = todo.todo;
    this.completed = todo.completed;
    this.deadline = todo.deadline;
  }

  @ApiProperty()
  todo: string;

  @ApiProperty()
  completed: boolean;

  @ApiProperty()
  deadline: Date;
}
