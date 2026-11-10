import { TaskList } from './task-list/task-list';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [TaskList, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('gestion-taches');
}
