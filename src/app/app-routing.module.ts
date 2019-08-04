import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SingleComponent} from './single/single.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: ':slug',
    component: SingleComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
