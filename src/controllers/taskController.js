import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}

export async function getTaskWithId(req, res, next){
  const taskId = parseInt(req.params.id);
  const task = await taskService.getTask(taskId);
  res.status(200).json(task);
}
