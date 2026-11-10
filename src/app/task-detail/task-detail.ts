import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService, Task } from '../task-service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  standalone: true,
  selector: 'app-task-detail',
  styleUrl: './task-detail.css',
  templateUrl: './task-detail.html',
})

export class TaskDetail {
    task: Task;

    constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router)
    {
      //ActivatedRoute permet a mon composant de lire les informations de l'URL actuelle
      //Récupère le paramètre "id" d'un lien
      const id = Number(this.route.snapshot.paramMap.get('id'));

      //Récupère la tache correspondant à l' "id"
      this.task = this.taskService.getTasks()[id];
    }

    validerModification() {
      this.taskService.saveTasks();
      this.router.navigate(['/tasks']);
      
      console.log('Modification validée');
    }
}
