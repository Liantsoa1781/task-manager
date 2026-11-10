import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { Home } from './home/home';

export const routes: Routes = [
    { path: 'tasks', component: TaskList }, 
    { path: 'home', component: Home }];
