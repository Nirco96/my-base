import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FacilitiesProvider} from "../../providers/facilities/facilities";
import {Facility} from "../../components/facility/facility.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private facilities : Facility[];

  constructor(public navCtrl: NavController, private _facilityProvider : FacilitiesProvider) {
    this.facilities = _facilityProvider.getFacilities();
  }
}
