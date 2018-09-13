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

  closestArrivalTime: Date = new Date();

  @Input()
  public transports: Transport[];

  constructor() {
  }

  ngOnInit(): void {
    this.computeClosestArrivalTime();
  }

  public computeClosestArrivalTime() : void {
    // this.closestArrivalTime;
    this.transports.forEach(transport => {
      if (this.closestArrivalTime < transport.arrivalTime) {
        this.closestArrivalTime = transport.arrivalTime;
      }
    });
  }
}

