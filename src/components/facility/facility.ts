import {Component, Input} from '@angular/core';

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

  private _numOfUpdates : number;

  _iconName : string;
  _displayName : string;


  @Input()
  set iconName(iconName) {
    this._iconName = iconName;
  }

  @Input()
  set displayName(displayName) {
    this._displayName = displayName;
  }

  constructor() {

  }

  public onUpdate() : void {
    this._numOfUpdates++;
  }
}
