import { Injectable } from '@angular/core';
import {Facility} from "../../components/facility/facility.model";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from "rxjs";
import { map} from "rxjs/operators";


/*
  Generated class for the FacilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacilitiesProvider {
  private itemsCollection: AngularFirestoreCollection<any[]>;
  private items: Observable<Facility[]>;

  constructor(afs: AngularFirestore) {
    console.log('Hello FacilitiesProvider Provider');
    this.itemsCollection = afs.collection("facilities");
    let observable = this.itemsCollection.valueChanges();
    this.items = observable.pipe(map((facility) => {
      let array = [];
      facility.forEach(json => array.push(Facility.fromJson(json)));
      return array;
    }));
  }

  getFacilities() : Observable<Facility[]> {
    return this.items;
  }
}
