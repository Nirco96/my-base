import {Injectable} from '@angular/core';
import {Transport} from "../../components/transport/models/transport.model";
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from "rxjs/Rx";
import {map} from "rxjs/operators";
import {observable} from "rxjs/index";
import {Station} from "../../components/transport/models/station.model";

/*
  Generated class for the TransportsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportsProvider {
  transports: Observable<Transport[]>;

  constructor(afs: AngularFirestore) {
    this.transports = afs.collection('transports').valueChanges().pipe(map(transports => {
      let array = [];
      transports.forEach((transport: Transport) => {
        array.push(Transport.fromJson(transport));
      });

      return array;
    }));
  }

  getTransports() : Observable<Transport[]> {
    return this.transports;
  }
}
