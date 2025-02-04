import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  styleUrl: './todo-list.component.scss',
  template: `
    <div class="todo-list">
      <h2 class="titleList">Today's tasks</h2>
      <div class="list-block">
        <h3 class="titleBlock">{{ tasks.length }} tasks</h3>
        <ul class="ulTasks">
          <li *ngFor="let task of tasks; let i = index" class="liTasks">
            <button (click)="toggleComplete(i)" 
                    class="complit" 
                    [class.completed]="task.completed"
                    [class.purple]="task.completed">
              {{ task.completed ? '✔' : ' ' }}
            </button>
            <p class="texTask" [class.completed]="task.completed">{{ task.text }}</p>
            <button *ngIf="task.completed" (click)="deleteTask(i)" class="delet">Done</button>
          </li>
        </ul>
      </div>

      <button (click)="showInput = true" *ngIf="!showInput" class="add"> + </button>
      <form *ngIf="showInput" (submit)="addTask()" class="task-form">
        <input [(ngModel)]="newTask" name="task" placeholder="New task" class="task-input" required />
        <button type="submit" (click)="showInput = true" *ngIf="!showInput" class="addInput"> + </button>
      </form>
    </div>
  `,
})
export class TodoListComponent {
  tasks: { text: string; completed: boolean }[] = [];
  newTask: string = '';
  showInput: boolean = false; 

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
      this.showInput = false; 
    }
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
