import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})

export class TaskList {
  tasks: string[] = ['Faire les courses', 'Réviser Angular', 'Finir le TP'];  
}
