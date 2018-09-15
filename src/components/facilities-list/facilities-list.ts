import {Component, Input} from '@angular/core';
import {Facility} from "../facility/models/facility.model";
import {FacilitiesProvider} from "../../providers/facilities/facilities";
import {Observable} from "rxjs/Rx";
import {Transport} from "../transport/models/transport.model";

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

  private _busFacility : Facility = new Facility("הסעות","bus", "black", null, null, null);

  @Input()
  facilities : Facility[];

  @Input()
  transports : Transport[];

  constructor() {

  }

}
