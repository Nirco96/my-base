import { Injectable } from '@angular/core';
import {Facility} from "../../components/facility/facility.model";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from "rxjs";

export interface Item { name: string; }

/*
  Generated class for the FacilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacilitiesProvider {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public http: HttpClient, afs: AngularFirestore) {
    console.log('Hello FacilitiesProvider Provider');
    this.itemsCollection = afs.collection("facilities");
    this.items = this.itemsCollection.valueChanges();
  }

  getFacilities() : Facility[] {
    return [new Facility("Gym", "tennisball"), new Facility("Rides", "bus"), new Facility("Shekem", "cafe")]
  }
}
