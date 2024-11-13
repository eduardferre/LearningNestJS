import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('status')
  status() {
    return '<h1>STATUS OK</h1>';
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
