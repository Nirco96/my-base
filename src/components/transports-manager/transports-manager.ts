import {Component, Input, OnInit} from '@angular/core';
import {Transport} from "../transport/models/transport.model";
import {Observable} from "rxjs/Rx";
import {TransportsProvider} from "../../providers/transports/transports.provider";
import {TransportRoutine} from "../transport/models/transport-routine.model";

/**
 * Generated class for the TransportsManagerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transports-manager',
  templateUrl: 'transports-manager.html'
})
export class TransportsManagerComponent {

  private _nearestTransportsAndTime: any;
  private _transportsToday: Transport[];

  private transports: Transport[];

  constructor(private _transportProvider: TransportsProvider) {
    this._transportsToday = [];
    _transportProvider.getTransports().subscribe(transports => {
      this.transports = transports;
      this.computeNearestArrivalTime();
    });
  }

  public computeNearestArrivalTime(): void {
    this.transports.forEach(transport => {
      // this._transportsToday = this._transportsToday.concat(
      transport.routine.forEach(routine => {
        if (routine.day == new Date().getDay()) {
          this._transportsToday.push(transport);
        }
      })
      // return todayTransport.departureTimes.forEach(departureTime => {
      //   this._transportsToday.push(departureTime)
    });

    // Mapping departure times of today to object containing transport and its relative date
    let departureDates = this.mapTodaysTransportTimesToDates(this._transportsToday);

    //
    // this.transportsObservable.filter(transport => {
    // });

    // Sorting by the closest to the current date, and getting the first one after the current date
    this._nearestTransportsAndTime = departureDates.sort((a, b) => {
      let distancea = Math.abs(Date.now() - a.departureTime);
      let distanceb = Math.abs(Date.now() - b.departureTime);
      return distancea - distanceb; // sort a before b when the distance is smaller
    }).filter(transport => {
        return transport.departureTime - Date.now() > 0;
      }
    );
  }

  private mapTodaysTransportTimesToDates(transportsToday: Transport[]): any[] {
    let departureTimes = [];
    transportsToday.forEach(transport => {
      transport.routine.forEach(routine => {
        routine.departureTimes.forEach(depatureTime => {
          let hours = parseInt(depatureTime.split(":")[0]);
          let minutes = parseInt(depatureTime.split(":")[1]);
          let returnDate = new Date();
          returnDate.setHours(hours);
          returnDate.setMinutes(minutes);
          departureTimes.push({
            "transport" : transport,
            "departureTime" : returnDate
          });
        })
      })
    });

    return departureTimes;
  }
}

