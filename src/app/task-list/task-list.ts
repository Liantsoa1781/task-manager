import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service.js';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  standalone: true,
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})

export class TaskList {

  constructor(public taskService: TaskService) {}

}