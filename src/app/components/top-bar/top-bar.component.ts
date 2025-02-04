import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-top-bar',
  imports: [CommonModule],
  styleUrls: ['./top-bar.component.scss'],
  template: `
    <div class="header">
      <div class="client flex">
        <p>Hello, {{ clientName }}!</p>
      </div>
      <ul class="list-months">
        <ng-container *ngFor="let month of nextMonths; let i = index">
          <li class="listM" [class.primal]="i === 0 "> {{ month }} </li>
        </ng-container>
        
      </ul>
      <ul class="list-days">
        <ng-container *ngFor="let day of weekDays; let i = index">
          <li class="listD" [class.primal]="i === 0"> {{ day }}</li>
        </ng-container>
      </ul>
    </div>
  `,
})

export class TopBarComponent {
  clientName: string = 'Anna';
  currentMonth: string;
  nextMonths: string[];
  weekDays: number[];

  isVisible: boolean = false;

  constructor() {
    this.currentMonth = this.getCurrentMonth();
    this.nextMonths = this.getNextMonths(6);
    this.weekDays = this.getNextWeekDays(5);
  }

  getPrimal(){
    
  }

  getNextWeekDays(count: number): number[] {
    const today = new Date();
    return Array.from({ length: count }, (_, i) => {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      return nextDay.getDate();
    });
  }

  getCurrentMonth(): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[new Date().getMonth()];
  }
  getNextMonths(count: number): string[] {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentMonthIndex = new Date().getMonth();
    return Array.from({ length: count }, (_, i) => months[(currentMonthIndex + i) % 12]);
  }
}