import { Component, OnInit } from '@angular/core';
import { PrestaState } from '../../../shared/enums/presta-state.enum';
import { Prestation } from '../../../shared/models/mprestation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public states: PrestaState[] = Object.values(PrestaState);
  public newItem: Prestation = new Prestation();
  constructor() { }

  ngOnInit() {
  }

}
