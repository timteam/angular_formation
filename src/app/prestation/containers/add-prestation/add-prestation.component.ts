import { Component, OnInit, EventEmitter } from '@angular/core';
import { PrestaState } from '../../../shared/enums/presta-state.enum';
import { Prestation } from '../../../shared/models/mprestation';
import { PrestationApiService } from '../../services/prestation-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationApiService: PrestationApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public add(presta: Prestation): void {
    console.log(presta);
    this.prestationApiService.add(presta);
    this.router.navigate(['/prestations']);
  }

}
