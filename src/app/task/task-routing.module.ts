import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { TaskListComponent } from "@app/task/task-list/task-list.component";

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: TaskListComponent }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TaskRoutingModule { }
