import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PlanetsPage } from "./planets";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [PlanetsPage],
  imports: [ComponentsModule, IonicPageModule.forChild(PlanetsPage)]
})
export class PlanetsPageModule {}
