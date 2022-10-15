import { Todo } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto implements Omit<Todo, 'id'> {
  constructor(todo: Todo) {
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
