import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavesPage } from './naves';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NavesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NavesPage),
  ],
})
export class NavesPageModule {}
