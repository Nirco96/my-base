import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Facility} from "../../components/facility/facility.model";

/*
  Generated class for the FacilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacilitiesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FacilitiesProvider Provider');
  }

  getFacilities() : Facility[] {
    return []
  }
}
