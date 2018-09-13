import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransportsProvider} from "../../providers/transports/transports";
import {Transport} from "../../components/transport/transport.model";

/**
 * Generated class for the TransportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transports',
  templateUrl: 'transports.html',
})
export class TransportsPage {

  private transports : Transport[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private _transportProvider : TransportsProvider) {
    _transportProvider.getTransports().subscribe((transports) => this.transports = transports);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportsPage');
  }

}
