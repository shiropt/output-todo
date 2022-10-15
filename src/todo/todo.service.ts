import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from '../prisma.service';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return await this.prisma.todo.create({ data: createTodoDto });
  }

  async findAll(): Promise<Todo[]> {
    return await this.prisma.todo.findMany();
  }

  async findOne(id: number): Promise<Todo> {
    return await this.prisma.todo.findUnique({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.prisma.todo.update({
      data: updateTodoDto,
      where: { id },
    });
  }

  async remove(id: number): Promise<Todo> {
    return await this.prisma.todo.delete({ where: { id } });
  }
}
