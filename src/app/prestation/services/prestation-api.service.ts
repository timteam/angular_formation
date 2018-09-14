import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/mprestation';
import { fakeCollection } from './fake-collection';
import { PrestaState } from '../../shared/enums/presta-state.enum';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationApiService {

  private _collection$: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  public message$: Subject<string> = new Subject();

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
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
    // this.collection$ = this.http.get('urlapi/prestation');
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
    // return this.http.post('urlApi/prestation', item);
    // ajouter un .subscribe dans le code behind pour que la requête soit exécutée
  }

  update(item: Prestation, option?: PrestaState): Promise<any> {
    const presta  = {...item};
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch(`urlApi/prestation/${item.id}`, presta);
    // ajouter un .subscribe dans le code behind pour que la requête soit exécutée
  }

  remove(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`urlApi/prestation/${item.id}`);
    // ajouter un .subscribe dans le code behind pour que la requête soit exécutée
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlApi/prestation/${id}`);
  }
}
