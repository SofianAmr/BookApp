import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes } from '@angular/router';  
import { ListBookComponent } from './list-book/list-book.component';  
  
export const routes: Routes = [  
  { path: '', component: ListBookComponent, pathMatch: 'full' },  
  { path: 'list-book', component: ListBookComponent }
];  
  
@NgModule({  
  imports: [  
    CommonModule,  
    RouterModule.forRoot(routes)  
  ],  
  exports: [RouterModule],  
  declarations: []  
})  
export class AppRoutingModule { }  