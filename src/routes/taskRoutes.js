import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateTaskId } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:id', validateTaskId, taskController.getTaskWithId)
router.post('/', validateTask, taskController.createTask);

export default router;
