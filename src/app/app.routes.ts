import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { Home } from './home/home';
import { TaskDetail } from './task-detail/task-detail';

export const routes: Routes = [
    { path: 'tasks', component: TaskList }, 
    { path: 'home', component: Home },
    { path: 'task/:id', component: TaskDetail }];
