import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/mprestation';
import { fakeCollection } from './fake-collection';
import { PrestaState } from '../../shared/enums/presta-state.enum';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationApiService {

  private _collection$: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestation');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map((data) => {
        const tab = [];
        data.forEach((res) => {
          tab.push(new Prestation(res));
        });
        return tab;
      })
    );
  }

  // get collection
  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set collection
  set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
  }

  update(item: Prestation, option?: PrestaState): Promise<any> {
    const presta  = {...item};
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
  }
}
