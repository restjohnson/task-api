import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

//get a task by id
export async function getTaskbyId(id){
  const task = await prisma.task.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      completed: true
    }
  })
  if (!task){
    const error = new Error('Task not found')
    error.status = 404;
    throw error;
  }
  return task;
}
