import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransportsProvider} from "../../providers/transports/transports";
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
  templateUrl: 'transports.html',
})
export class TransportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportsPage');

  }

}
