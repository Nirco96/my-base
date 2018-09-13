import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Transport} from "../../components/transport/transport.model";

/*
  Generated class for the TransportsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportsProvider {

  constructor() {
  }

  public getTransports() {
    return [new Transport(new Date(), ["Mahan", "Herev Magen"]), new Transport(new Date("September 13, 2018 14:20:00"), ["Tree Square", "infirmary"])]
  }
}
