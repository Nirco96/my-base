import { Injectable } from '@angular/core';
import {Facility} from "../../components/facility/facility.model";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from "rxjs";


/*
  Generated class for the FacilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacilitiesProvider {
  private itemsCollection: AngularFirestoreCollection<Facility>;
  items: Observable<Facility[]>;

  constructor(afs: AngularFirestore) {
    console.log('Hello FacilitiesProvider Provider');
    this.itemsCollection = afs.collection("facilities");
    this.items = this.itemsCollection.valueChanges();
  }

  getFacilities() : Observable<Facility[]> {
    return this.items;
  }
}
