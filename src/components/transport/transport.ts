import {Component, Input} from '@angular/core';

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
  public arrivalTime : Date;

  @Input()
  public stations : Array<string>;

  constructor() {
  }
}
