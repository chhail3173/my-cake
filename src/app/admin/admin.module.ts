import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component'
import { EditformComponent } from '../editform/editform.component';

const route: Routes = [

  {path: '', component: AdminComponent},
  {path: 'editForm/:cakeid', component: EditformComponent}

]



@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
 
})
export class AdminModule { }
