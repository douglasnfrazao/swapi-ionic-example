import { Component, Input } from "@angular/core";

/**
 * Generated class for the InfoItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "info-item",
  templateUrl: "info-item.html"
})
export class InfoItemComponent {
  @Input()
  title: string = "";

  constructor() {
    console.log("Hello InfoItemComponent Component");
  }
}
