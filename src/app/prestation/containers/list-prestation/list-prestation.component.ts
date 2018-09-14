import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationApiService } from '../../services/prestation-api.service';
import { Prestation } from '../../../shared/models/mprestation';
import { Observable, Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit, OnDestroy {
  public collection$: Observable<Prestation[]>;
  // public collection: Prestation[];
  public prestaHeaders: string[];
  public message$: Subject<string>;
  public addPresta = {libelle: 'Add prestation', route: '/prestations/add'};
  constructor(
    private prestationApiService: PrestationApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.collection$ = this.prestationApiService.collection$;
    this.message$ = this.prestationApiService.message$;
    // this.sub = this.prestationApiService.collection.subscribe((data) => {
    //   console.log('subscribe');
    //   this.collection = data;
    // });
    this.prestaHeaders = [
      'Type',
      'Client',
      'Nb jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Statut',
      'Action'
    ];
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  edit(presta: Prestation): void {
    this.router.navigate(['prestations/edit', presta.id]);
  }

}
