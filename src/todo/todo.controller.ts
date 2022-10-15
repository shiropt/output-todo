import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiResponse({
    status: 200,
    description: 'success',
    type: Todo,
  })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Todo,
    isArray: true,
  })
  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Todo,
  })
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'success',
    type: Todo,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todoService.update(+id, updateTodoDto);
  }

  @ApiResponse({
    status: 200,
    description: 'success',
    type: Todo,
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Todo> {
    return this.todoService.remove(+id);
  }
}
