import { Component, Input, OnInit } from '@angular/core';
import { ViewController, Platform } from 'ionic-angular';
import { NaveProvider } from '../../providers/nave/nave';

/**
 * Generated class for the PilotInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pilot-info',
  templateUrl: 'pilot-info.html'
})
export class PilotInfoComponent implements OnInit {

  @Input()
  pilotUrl: string = ""

  pilot: any = {}

  constructor(private naveProvider: NaveProvider) {
  }

  ngOnInit() {
    console.log(this.pilotUrl)
    this.naveProvider.getPilot(this.pilotUrl).subscribe((res: any) => {
      this.pilot = res
    })
  }



}
