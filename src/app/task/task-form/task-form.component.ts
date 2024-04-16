import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})

export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<void>();
  constructor(private taskService: TaskService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskService.addTask(form.value).subscribe({
        next: (task) => {
          console.log('Task added:', task);
          form.reset();
          this.taskAdded.emit();
        },
        error: (error) => {
          console.error('Error adding task:', error);
        }
      });
    }
  }
}
