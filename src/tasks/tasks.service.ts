import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks() {
    return [
      {
        id: 1,
        title: 'first task',
        description: 'some task',
      },
    ];
  }
  createTask() {}
  updateTask() {}
  deleteTask() {}
}
