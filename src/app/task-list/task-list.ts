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
  tasks = [
    { desc : 'Faire les courses', completed : false },
    { desc : 'Réviser Angular', completed : false },
    { desc : 'Finir le TP', completed : true },
  ];  

  newTask = signal('');

  //Methode pour ajouter une tache
  addTask(){
    //Prends la valeur du task dans le champs
    const task = this.newTask();

    //Renvoie la valeur ajouter dans le tableau des tasks
    this.tasks.push({desc : task, completed : false});

    //Vider le champs de saisie
    this.newTask.set('');
  }

  //Methode poour supprimer une tache
  deleteTask(i: number){
    //Verifies si l'index existe ou pas
    if(i<0 || i>=this.tasks.length){
      alert("La tâche n'esiste pas"); 
    }
    //Supprime une seule fois à partir de l'index
    this.tasks.splice(i, 1);
  }

}
