import {Component, Input, OnInit} from '@angular/core';
import {Transport} from "../transport/models/transport.model";
import {Observable} from "rxjs/Rx";
import {TransportsProvider} from "../../providers/transports/transports";
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

  private _nearestTransport: Transport;
  private _transportsToday: string[];

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
      transport.routine.filter(routine => {
        return (routine.day == new Date().getDay());
      }).forEach(todayTransport => {
        return todayTransport.departureTimes.forEach(departureTime => {
          this._transportsToday.push(departureTime)
        })
      });
    });

    // Mapping departure times of today to relative dates
    let departureDates = this.mapDepartureTimesToDates(this._transportsToday);

    //
    // this.transportsObservable.filter(transport => {
    // });

    // Sorting by the closest to the current date, and getting the first one after the current date
    let nextArrival = departureDates.sort((a, b) => {
      let distancea = Math.abs(new Date() - a);
      let distanceb = Math.abs(new Date() - b);
      return distancea - distanceb; // sort a before b when the distance is smaller
    }).filter(transport => {
        return new Date() - transport > 0;
      }
    )[0];
    debugger
  }

  private mapDepartureTimesToDates(departureTimes : string[]) : Date[]{
    return departureTimes.map(departureTime => {
      let hours = parseInt(departureTime.split(":")[0]);
      let minutes = parseInt(departureTime.split(":")[1]);
      let returnDate = new Date();
      returnDate.setHours(hours);
      returnDate.setMinutes(minutes);
      return returnDate;
    })
  }
}

