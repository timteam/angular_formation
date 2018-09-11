import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';

const appRoutes: Routes = [
  { path: '', component: ListPrestationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationRoutingModule { }
