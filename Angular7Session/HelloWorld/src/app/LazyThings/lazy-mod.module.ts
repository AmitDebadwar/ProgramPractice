import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyUserListComponent } from './lazy-user-list/lazy-user-list.component';
import { RouterModule } from '@angular/router';
import { LazyUserDetailsComponent } from './lazy-user-details/lazy-user-details.component';

@NgModule({
  declarations: [LazyUserListComponent, LazyUserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'load', component: LazyUserListComponent
    },
    {
      path:'s', component: LazyUserDetailsComponent
    }
  
  ])
  ]
})
export class LazyModModule { }
