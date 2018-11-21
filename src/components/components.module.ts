import { NgModule } from "@angular/core";
import { InfoItemComponent } from "./info-item/info-item";
import { IonicPageModule } from "ionic-angular";
import { PlanetInfoComponent } from './planet-info/planet-info';
import { NaveInfoComponent } from './nave-info/nave-info';
import { PilotInfoComponent } from './pilot-info/pilot-info';
@NgModule({
  declarations: [InfoItemComponent,
    PlanetInfoComponent,
    NaveInfoComponent,
    PilotInfoComponent],
  imports: [IonicPageModule],
  exports: [InfoItemComponent,
    PlanetInfoComponent,
    NaveInfoComponent,
    PilotInfoComponent]
})
export class ComponentsModule {}
