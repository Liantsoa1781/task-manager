import { Injectable, signal } from '@angular/core';

export interface Task{
    desc: string;
    completed: boolean;
    priority: string;
    assignedTo: string;
    dueDate: string;
    createdAt: string;
}

export interface NewTask{
    desc: string;
    priority: string;
    assignedTo: string;
    dueDate: string;
}

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    tasks: Task[] = [];

    newtask = signal<NewTask>({
        desc: '',
        priority: '',
        assignedTo: '',
        dueDate: ''
    });

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
        //Prends les valeurs dans les champs
        const newtask = this.newtask();
    
        //Renvoie les valeurs ajoutees dans le tableau des tasks
        this.tasks.push({
            desc: newtask.desc,
            completed: false,
            priority: newtask.priority,
            assignedTo: newtask.assignedTo,
            dueDate: newtask.dueDate,
            createdAt: new Date().toISOString()
        });

        //Ajoutes les valeurs des tasks dans loalStorage
        this.saveTasks();
        //Vider le champs de saisie
        this.newtask.set({
            desc: '',
            priority: '',
            assignedTo: '',
            dueDate: ''
        });
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

