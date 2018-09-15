import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Transport} from "../transport/models/transport.model";
import {Observable} from "rxjs/Rx";
import {TransportsProvider} from "../../providers/transports/transports.provider";
import {TransportRoutine} from "../transport/models/transport-routine.model";
import {AngularFirestore} from "@angular/fire/firestore";
import {Station} from "../transport/models/station.model";

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
export class TransportsManagerComponent implements AfterViewInit {

  private _nearestTransportsAndTime: any = [];

  @Input()
  public transports: Transport[];

  constructor() {

  }

  ngAfterViewInit(): void {
    // this.fetchStationFromDatabase(this.transports);
    this.computeNearestArrivalTime();
  }

  public computeNearestArrivalTime(): void {
    let transportsToday = this.getTransportsToday(this.transports);
    let departureDates = this.mapTodaysTransportTimesToDates(transportsToday);
    this._nearestTransportsAndTime = this.getNearestTransportsAndTime(departureDates);
  }

  private getTransportsToday(transports) {
    let transportsToday = [];
    transports.forEach(transport => {
      // this._transportsToday = this._transportsToday.concat(
      transport.routine.filter(routine => {
        if (routine.day == new Date().getDay()) {
          transportsToday.push(transport);
        }
      })
    });

    return transportsToday
  }

// Mapping departure times of today to object containing transport and its relative date
  private mapTodaysTransportTimesToDates(transportsToday: Transport[]): any[] {
    let departureTimes = [];
    transportsToday.forEach(transport => {
      transport.routine.filter(routine => routine.day == new Date().getDay())
        .forEach(routine => {
          routine.departureTimes.forEach(depatureTime => {
            let hours = parseInt(depatureTime.split(":")[0]);
            let minutes = parseInt(depatureTime.split(":")[1]);
            let returnDate = new Date();
            returnDate.setHours(hours);
            returnDate.setMinutes(minutes);
            departureTimes.push({
              "transport": transport,
              "departureTime": returnDate
            });
          })
        })
    });

    return departureTimes;
  }

  // Sorting by the closest to the current date, and getting the first one after the current date
  private getNearestTransportsAndTime(departureDates) {
    return departureDates.sort((a, b) => {
      let distancea = Math.abs(Date.now() - a.departureTime);
      let distanceb = Math.abs(Date.now() - b.departureTime);
      return distancea - distanceb; // sort a before b when the distance is smaller
    }).filter(transport => {
        return transport.departureTime - Date.now() > 0;
      }
    );
  }
}

