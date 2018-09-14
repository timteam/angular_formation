import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { FormComponent } from './components/form/form.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { Prestation } from '../shared/models/mprestation';


@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations:
  [
    ListPrestationComponent,
    PrestationComponent,
    AddPrestationComponent,
    FormComponent,
    FormReactiveComponent,
    EditPrestationComponent
  ]
})
export class PrestationModule { }
