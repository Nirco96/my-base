import {Component, Input, OnInit} from '@angular/core';
import {Transport} from "../transport/transport.model";

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
export class TransportsManagerComponent implements OnInit {

  nearestTransport: Transport;

  @Input()
  public transports: Transport[];

  constructor() {
    // this.nearestTransport = new Transport(new Date(), ["Mahan"]);
  }

  ngOnInit(): void {
    this.computeClosestArrivalTime();
  }

  public computeClosestArrivalTime(): void {
    let transportsToday = [];
    this.transports.forEach(transport => {
      transportsToday = transport.routine.filter(routine => {
        return routine.day == new Date().getDay();
      })
    });

    //
    // this.transports.filter(transport => {
    // });

    // assuming you have an array of Date objects - everything else is crap:
    //
    // Sorting by the closest to the current date, and getting the first one after the current date
    this.nearestTransport = this.transports.sort((a, b) => {
      let distancea = Math.abs(new Date() - a.arrivalTime);
      let distanceb = Math.abs(new Date() - b.arrivalTime);
      return distancea - distanceb; // sort a before b when the distance is smaller
    }).filter(transport => {
        return new Date() - transport.arrivalTime > 0;
      }
    )[0];
  }
}

