import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NaveProvider } from '../../providers/nave/nave';

/**
 * Generated class for the NavesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-naves',
  templateUrl: 'naves.html',
})
export class NavesPage {

  naves : Array<any> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public navesProvider: NaveProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavesPage');
    this.navesProvider.getNaves().subscribe((res) => {
      this.naves = res.results
      console.log(this.naves)
    })
  }

  showDetail(naveObj: any) {
    this.navCtrl.push("NaveDetailPage", {nave: naveObj })
  }

}
