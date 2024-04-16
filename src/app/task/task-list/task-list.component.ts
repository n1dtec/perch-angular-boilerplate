import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { TaskFormComponent } from "@app/task/task-form/task-form.component";
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TaskFormComponent,
    CommonModule,
    NgForOf,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  isEmpty: boolean = true;
  showTaskForm: boolean = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.refreshTasks();
  }

  refreshTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
      this.isEmpty = tasks.length === 0;
    });
  }

  toggleTaskForm() {
    this.showTaskForm = !this.showTaskForm;
  }

  onStatusChange(task: Task, newStatus: string) {
    if (task.id !== undefined) {
      this.taskService.updateTaskStatus(task.id, newStatus).subscribe(() => {
        task.status = newStatus as any;
        alert(`Status Updated: ${newStatus}`);
      });
    } else {
      console.error('Attempted to update status for a task without an ID');
    }
  }

  onDelete(task: Task) {
    if (task.id !== undefined) {
      this.taskService.deleteTask(task.id).subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
        alert('Task Deleted');
      });
    } else {
      console.error('Attempted to delete a task without an ID');
    }
  }
}
