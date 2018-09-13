import { Injectable } from '@angular/core';
import {Facility} from "../../components/facility/facility.model";

/*
  Generated class for the FacilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FacilitiesProvider {

  constructor() {
    console.log('Hello FacilitiesProvider Provider');
  }

  getFacilities() : Facility[] {
    return [new Facility("Gym", "tennisball"), new Facility("Rides", "bus"), new Facility("Shekem", "cafe")]
  }
}
