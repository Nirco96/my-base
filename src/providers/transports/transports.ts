import { Injectable } from '@angular/core';
import {Transport} from "../../components/transport/transport.model";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";
import {observable} from "rxjs/index";

/*
  Generated class for the TransportsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportsProvider {
  private transportCollection: AngularFirestoreCollection<Transport>;
  transports: Observable<Transport[]>;

  constructor(afs: AngularFirestore) {
    this.transportCollection = afs.collection("transports");
    let observable = this.transportCollection.valueChanges();

    this.transports = observable.pipe(map((transport) => {
      let array = [];
      transport.forEach(json => {
        array.push(Transport.fromJson(json))
      });
      return array;
    }));
  }

  getTransports() : Observable<Transport[]> {
    return this.transports;
  }

  public getTransportsNull() {
    // return [new Transport(new Date(), ["Mahan", "Herev Magen"]), new Transport(new Date("September 13, 2018 14:20:00"), ["Tree Square", "infirmary"])]
  }
}
