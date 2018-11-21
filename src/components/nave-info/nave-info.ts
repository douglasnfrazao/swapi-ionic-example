import { Component, Input } from '@angular/core';

/**
 * Generated class for the NaveInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nave-info',
  templateUrl: 'nave-info.html'
})
export class NaveInfoComponent {

  @Input()
  nave: any = {}

  constructor() {
  }

}
