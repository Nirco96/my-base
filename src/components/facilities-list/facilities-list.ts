import {Component, Input} from '@angular/core';
import {Facility} from "../facility/models/facility.model";
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

  private _busFacility : Facility = new Facility("הסעות","bus", "black", null, null, null);

  @Input()
  facilities : Facility[];

  constructor(private _facilitiesProvider : FacilitiesProvider) {

  }

}
