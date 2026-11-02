import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})

export class TaskList {
  tasks: string[] = ['Faire les courses', 'Réviser Angular', 'Finir le TP'];  
  newTask = signal('');

  addTask(){
    //Prends la valeur du task dans le champs
    const task = this.newTask();

    //Renvoie la valeur ajouter dans le tableau des tasks
    this.tasks.push(task);

    //Vider le champs de saisie
    this.newTask.set('');
  }

}
