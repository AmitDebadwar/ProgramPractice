 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routerObj } from './router-object';
 
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routerObj)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
