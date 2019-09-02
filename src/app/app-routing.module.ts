import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposListComponent } from './components/repos-list/repos-list.component';
import { ReposDetailsComponent } from './components/repos-details/repos-details.component';
import { ReposEditComponent } from './components/repos-edit/repos-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ReposListComponent
  },
  {
    path: 'repo/:name',
    component: ReposDetailsComponent
  },
  {
    path: 'repo/:name/edit',
    component: ReposEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
