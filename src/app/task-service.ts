import { Injectable, signal } from '@angular/core';

export interface Task{
    desc: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    tasks: Task[] = [];

    newTask = signal('');

      // Méthode pour récupérer les tâches
    getTasks(): Task[] {
        return this.tasks;
    }

    constructor(){
        const savedTasks = localStorage.getItem('tasks');

        //Récupérer les données au chargement
        if(savedTasks){
            this.tasks = JSON.parse(savedTasks);
        }
    }

    //Methode pour sauvegarder une tâche dans localStorage
    saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    //Methode pour ajouter une tache
    addTask(){
        //Prends la valeur du task dans le champs
        const task = this.newTask();
    
        //Renvoie la valeur ajouter dans le tableau des tasks
        this.tasks.push({
            desc: task,
            completed: false
        });

        //Ajoutes les valeurs des tasks dans loalStorage
        this.saveTasks();
        //Vider le champs de saisie
        this.newTask.set('');
    }
    
    //Methode poour supprimer une tache
    deleteTask(i: number){
        //Supprime une seule fois à partir de l'index
        this.tasks.splice(i, 1);

        this.saveTasks();
    }
    
    //Methode pour inverser l'etat de la tache
    tooggleTask(i: number){
        //Inverse la valeur du bouton
        this.tasks[i].completed = !this.tasks[i].completed;

        this.saveTasks();
    }
}

