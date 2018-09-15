import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FacilitiesProvider} from "../../providers/facilities/facilities";
import {Facility} from "../../components/facility/models/facility.model";
import {Transport} from "../../components/transport/models/transport.model";
import {TransportsProvider} from "../../providers/transports/transports.provider";
import {Observable} from "rxjs/Rx";
import {Station} from "../../components/transport/models/station.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private facilities : Facility[];
  private transports: Transport[];

  constructor(public navCtrl: NavController, private _facilityProvider : FacilitiesProvider, private _transportsProvider : TransportsProvider) {
    _facilityProvider.getFacilities().subscribe((facilities) => this.facilities = facilities);
    this._transportsProvider.getTransports().subscribe((transports) =>  {
      this.transports = transports;
      this.fetchStationFromDatabase(this.transports);
    });
  }

  private fetchStationFromDatabase(transportsArray: Transport[]) {
    transportsArray.forEach(transport => {
      transport.stations.map(stationObj => {
        stationObj.station.get().then(stationData => {
          transport.stations.shift();
          transport.stations.push(Station.fromJson(stationObj.delta, stationData.data()));
        });
      });
    });
  }
}
