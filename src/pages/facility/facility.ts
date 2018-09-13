import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Facility} from "../../components/facility/models/facility.model";

/**
 * Generated class for the FacilityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facility',
  templateUrl: 'facility.html',
})
export class FacilityPage {

  public facility : Facility;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.facility = new Facility("f", "", "", "", undefined, "");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilityPage');
    console.log(this.navParams);
    this.facility = this.navParams.get("facility");

  }

  getDayString(day : number) {
    switch(day) {
      case(0): {
        return "ראשון";
      }
      case(1): {
        return "שני";
      }
      case(2): {
        return "שלישי";
      }
      case(3): {
        return "רביעי";
      }
      case(4): {
        return "חמישי";
      }
      case(5): {
        return "שישי";
      }
      case(6): {
        return "שבת";
      }
    }
  }

}
