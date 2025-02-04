import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoListComponent, TopBarComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'todo-list';
}
