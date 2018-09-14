import { Injectable } from '@angular/core';
import { Resolve, RouterState, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { PrestationApiService } from './prestation-api.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolverService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.paramMap.get('id');

    return this.prestationService.getPrestation(id).pipe(
      take(1),
      map(presta => {
        if (presta) {
          return presta;
        } else { // id not found
          this.router.navigate(['/prestations']);
          return null;
        }
      })
    );
  }

  constructor(
    private prestationService: PrestationApiService,
    private router: Router
    ) { }
}
