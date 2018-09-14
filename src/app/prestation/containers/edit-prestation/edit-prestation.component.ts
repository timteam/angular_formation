import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/mprestation';
import { PrestationApiService } from '../../services/prestation-api.service';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  public presta: Prestation;
  constructor(
    private prestationApiService: PrestationApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data) => {
        // console.log(data);
        this.presta = data.presta;
      });
  }

  public modify(presta: Prestation): void {
    this.prestationApiService.update(presta).then(() => {
      this.router.navigate(['/prestations']);
    });
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> {
  //   return this.activatedRoute.snapshot.data['presta'];
  // }

}
