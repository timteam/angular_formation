import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/mprestation';
import { fakeCollection } from './fake-collection';
import { PrestaState } from '../../shared/enums/presta-state.enum';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestationApiService {

  private _collection: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestation');
    this.collection = this.itemsCollection.valueChanges();
  }

  // get collection
  get collection(): Observable<Prestation[]> {
    return this._collection;
  }

  // set collection
  set collection(col: Observable<Prestation[]>) {
    this._collection = col;
  }

  // get presta by id

  // update presta
  public update(presta: Prestation, state?: PrestaState): any {
    const prestaToUpdate = {...presta};
    // appel Api
  }

  // del presta

  // add presta
  public add(presta: Prestation): void {
    // this.collection.push(presta);
  }
}
