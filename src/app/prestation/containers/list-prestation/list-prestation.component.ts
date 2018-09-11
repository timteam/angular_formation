import { Component, OnInit } from '@angular/core';
import { PrestationApiService } from '../../services/prestation-api.service';
import { Prestation } from '../../../shared/models/mprestation';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {
  public collection: Prestation[];
  public prestaHeaders: string[];
  constructor(
    private prestationApiService: PrestationApiService
  ) { }

  ngOnInit() {
    this.collection = this.prestationApiService.collection;
    this.prestaHeaders = [
      'Type',
      'Client',
      'Nb jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Action',
    ];
  }

}
