import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NaveDetailPage } from './nave-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NaveDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NaveDetailPage),
  ],
})
export class NaveDetailPageModule {}
