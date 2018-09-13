import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrestaState } from '../../../shared/enums/presta-state.enum';
import { Prestation } from '../../../shared/models/mprestation';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  public form: FormGroup;
  public states: PrestaState[] = Object.values(PrestaState);
  public initPrestation: Prestation = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit() {
  this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      type_presta: [this.initPrestation.type_presta],
      type_client: [this.initPrestation.type_client],
      nb_jours: [this.initPrestation.nb_jours],
      taux_tva: [this.initPrestation.taux_tva],
      tjm_ht: [this.initPrestation.tjm_ht],
      state: [this.initPrestation.state]
    });
  }

  public process() {
    const item = new Prestation(this.form.value);
    this.nItem.emit(item);
  }

}
