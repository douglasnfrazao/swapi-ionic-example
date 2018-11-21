import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanetsProvider } from '../../providers/planets/planets';

/**
 * Generated class for the PlanetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planets',
  templateUrl: 'planets.html',
})
export class PlanetsPage {

  planets : Array<any> = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public planetsProvider: PlanetsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlanetsPage');
    this.planetsProvider.getPlanets().subscribe(res => {
      this.planets = res.results
      console.log(this.planets)
    })
  }

}
