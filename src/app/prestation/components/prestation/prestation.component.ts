import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/mprestation';
import { PrestaState } from '../../../shared/enums/presta-state.enum';
import { PrestationApiService } from '../../services/prestation-api.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() presta: Prestation;
  public states = Object.values(PrestaState); // transform object to array
  public res;
  constructor(
    private prestationApiService: PrestationApiService
  ) { }

  ngOnInit() {
  }

  public update(e): void {
    const state = e.target.value;
    this.prestationApiService.update(this.presta, state).then(() => {
      this.presta.state = state;
    });
  }

  public remove(): void {
    this.prestationApiService.remove(this.presta).then((data) => {
    this.prestationApiService.message$.next('Bravo Toto');
    });
  }

}
