import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';
import { PrestaState } from '../enums/presta-state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {


  @Input() appState: PrestaState;
  @HostBinding('class') nomClass;
  constructor() {
  }

  ngOnChanges(): void {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  formatClass(appState: PrestaState): string {
    const filteredAppState = appState.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase();
    return `state-${filteredAppState}`;
  }

  // en fonction du state return une chaine like state-option
  // remove all accents de state et espaces

}












