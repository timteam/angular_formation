import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      type_presta:
        [
          this.initPrestation.type_presta,
          Validators.compose([Validators.required, Validators.minLength(4)])
        ],
      type_client:
      [
        this.initPrestation.type_client,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      nb_jours: [this.initPrestation.nb_jours],
      taux_tva: [this.initPrestation.taux_tva],
      tjm_ht: [this.initPrestation.tjm_ht],
      state: [this.initPrestation.state]
    });
  }

  public process() {
    this.nItem.emit(this.form.value);
  }

  public isError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

}
