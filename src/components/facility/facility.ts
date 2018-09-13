import { Component } from '@angular/core';

/**
 * Generated class for the FacilityComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'facility',
  templateUrl: 'facility.html'
})
export class FacilityComponent {

  text: string;

  constructor() {
    console.log('Hello FacilityComponent Component');
    this.text = 'Hello World';
  }

}
