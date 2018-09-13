import { Component } from '@angular/core';
import {Facility} from "../facility/facility.model";
import {FacilitiesProvider} from "../../providers/facilities/facilities";
import {TransportsProvider} from "../../providers/transports/transports";
import {Transport} from "../transport/transport.model";

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
  private _transports : Transport[];

  constructor(private _facilitiesProvider : FacilitiesProvider, private _transportsProvider : TransportsProvider) {
    this._facilities = _facilitiesProvider.getFacilities();
    this._transports  = _transportsProvider.getTransports();
  }

}
