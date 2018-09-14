import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
  @Input() prestaToEdit: Prestation;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // console.log(this.prestaToEdit);
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      type_presta:
        [
          this.prestaToEdit ? this.prestaToEdit.type_presta : this.initPrestation.type_presta,
          Validators.compose([Validators.required, Validators.minLength(4)])
        ],
      type_client:
      [
        this.prestaToEdit ? this.prestaToEdit.type_client : this.initPrestation.type_client,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      nb_jours: [
        this.prestaToEdit ? this.prestaToEdit.nb_jours : this.initPrestation.nb_jours
      ],
      taux_tva: [
        this.prestaToEdit ? this.prestaToEdit.taux_tva : this.initPrestation.taux_tva
      ],
      tjm_ht: [
        this.prestaToEdit ? this.prestaToEdit.tjm_ht : this.initPrestation.tjm_ht
      ],
      state: [
        this.prestaToEdit ? this.prestaToEdit.state : this.initPrestation.state
      ]
    });
  }

  public process() {
    this.nItem.emit(this.getItem(this.form.value));
  }

  public isError(fieldName: string): boolean {
    return this.form.get(fieldName).invalid && this.form.get(fieldName).touched;
  }

  private getItem(item: Prestation) {
    const data = this.form.value;
    if (!this.prestaToEdit) {
      return data;
    }
    const id = this.prestaToEdit.id;
    return {id, ...data};
  }

}
