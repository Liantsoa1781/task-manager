import { Injectable, signal } from '@angular/core';

export interface Task{
    desc: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    tasks = [
        { desc : 'Faire les courses', completed : false },
        { desc : 'Réviser Angular', completed : false },
        { desc : 'Finir le TP', completed : true },
      ];

    newTask = signal('');

      // Méthode pour récupérer les tâches
    getTasks(): Task[] {
        return this.tasks;
    }

    // setTasks(): 
    
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
        //Supprime une seule fois à partir de l'index
        this.tasks.splice(i, 1);
    }
    
    //Methode pour inverser l'etat de la tache
    tooggleTask(i: number){
        //Inverse la valeur du bouton
        this.tasks[i].completed = !this.tasks[i].completed;
    }
}

