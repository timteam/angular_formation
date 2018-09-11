import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/mprestation';
import { fakeCollection } from './fake-collection';

@Injectable({
  providedIn: 'root'
})
export class PrestationApiService {

  private _collection: Prestation[];

  constructor() {
    this.collection = fakeCollection;
  }

  // get collection
  get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  set collection(col: Prestation[]) {
    this._collection = col;
  }

  // get presta by id

  // update presta

  // del presta

  // add presta
}
