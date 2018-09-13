import { Component } from '@angular/core';
import {Facility} from "../facility/facility.model";
import {FacilitiesProvider} from "../../providers/facilities/facilities";

/**
 * Generated class for the FacilitiesListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'facilities-list',
  templateUrl: 'facilities-list.html'
})
export class FacilitiesListComponent {

  private _facilities : Facility[];

  constructor(private _facilitiesProvider : FacilitiesProvider) {
    this._facilities = _facilitiesProvider.getFacilities();
  }

}
