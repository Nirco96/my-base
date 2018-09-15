import {Component, Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransportsProvider} from "../../providers/transports/transports.provider";
import {Transport} from "../../components/transport/models/transport.model";
import {ObservableInput} from "rxjs/index";
import {Observable} from "rxjs/Rx";

/**
 * Generated class for the TransportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transports',
  templateUrl: 'transports-page.html',
})
export class TransportsPage {
  private transports: Transport[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (!this.transports) {
      this.transports = this.navParams.get("transports");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportsPage');

  }

}
