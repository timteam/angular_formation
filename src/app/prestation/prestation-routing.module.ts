import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { PrestationResolverService } from './services/prestation-resolver.service';

const appRoutes: Routes = [
  { path: '', component: ListPrestationComponent },
  { path: 'add', component: AddPrestationComponent },
  { path: 'edit/:id', component: EditPrestationComponent, resolve: {
    presta: PrestationResolverService
  } }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationRoutingModule { }
