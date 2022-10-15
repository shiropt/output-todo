import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.todo.createMany({
    data: [
      { todo: 'todo1', completed: false, deadline: new Date('2022/1/1') },
      { todo: 'todo2', completed: true, deadline: new Date('2022/2/1') },
      { todo: 'todo3', completed: false, deadline: new Date('2022/3/1') },
      { todo: 'todo4', completed: true, deadline: new Date('2022/4/1') },
      { todo: 'todo5', completed: false, deadline: new Date('2022/5/1') },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
