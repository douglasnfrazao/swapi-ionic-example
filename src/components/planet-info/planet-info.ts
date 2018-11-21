import { Component, Input } from '@angular/core';

/**
 * Generated class for the PlanetInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'planet-info',
  templateUrl: 'planet-info.html'
})
export class PlanetInfoComponent {

  @Input()
  planet: any = []

  constructor() {
    console.log('Hello PlanetInfoComponent Component');
  }

}
