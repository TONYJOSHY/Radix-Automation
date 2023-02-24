import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColdStorageComponent } from './cold-storage.component';
import { ColdStorageRoutingModule } from './cold-storage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoTileComponent } from './components/info-tile/info-tile.component';
import { TimeTileComponent } from './components/time-tile/time-tile.component';
import { AlarmsComponent } from './components/alarms/alarms.component';
import { OeeComponent } from './components/oee/oee.component';
import { AlarmHistoryComponent } from './components/alarm-history/alarm-history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { QuantityTileComponent } from './components/quantity-tile/quantity-tile.component';



@NgModule({
  declarations: [
    ColdStorageComponent,
    InfoTileComponent,
    TimeTileComponent,
    AlarmsComponent,
    OeeComponent,
    AlarmHistoryComponent,
    SettingsComponent,
    QuantityTileComponent
  ],
  imports: [
    CommonModule,
    ColdStorageRoutingModule,
    SharedModule
  ]
})
export class ColdStorageModule { }
