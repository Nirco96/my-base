import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {FacilityPage} from "../../pages/facility/facility";
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

  @Input()
  public iconName : string;

  @Input()
  public displayName : string;

  constructor(public navCtrl: NavController) {
    
  }

  public onUpdate() : void {
    this._numOfUpdates++;
  }

  public openFacilityPage(): void{
    console.log("or is king");
    this.navCtrl.push(FacilityPage,{page:this.displayName});
  }
}
