import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello TransportsManagerComponent Component');
    this.text = 'Hello World';
  }

}
