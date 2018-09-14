import {Component, Input} from '@angular/core';
import {Transport} from "./models/transport.model";

/**
 * Generated class for the TransportComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transport',
  templateUrl: 'transport.html'
})
export class TransportComponent {
  @Input()
  public transport : Transport;

  @Input()
  public departureTime : Date;

  constructor() {
  }
}
