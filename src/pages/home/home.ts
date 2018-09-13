import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FacilitiesProvider} from "../../providers/facilities/facilities";
import {Facility} from "../../components/facility/models/facility.model";
import {Transport} from "../../components/transport/transport.model";
import {TransportsProvider} from "../../providers/transports/transports";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private facilities : Facility[];
  private transports : Transport[];

  constructor(public navCtrl: NavController, private _facilityProvider : FacilitiesProvider, private _transportProvider : TransportsProvider) {
    _facilityProvider.getFacilities().subscribe((facilities) => this.facilities = facilities);
    _transportProvider.getTransports().subscribe((transports) => this.transports = transports);
  }
}
