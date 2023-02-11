import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { ProductionComponent } from './components/production/production.component';
import { EnergyConsumptionComponent } from './components/energy-consumption/energy-consumption.component';
import { ManPowerComponent } from './components/man-power/man-power.component';
import { WaterManagementComponent } from './components/water-management/water-management.component';
import { AlarmSecurityComponent } from './components/alarm-security/alarm-security.component';
import { OverallEfficiencyComponent } from './components/overall-efficiency/overall-efficiency.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductionComponent,
    EnergyConsumptionComponent,
    ManPowerComponent,
    WaterManagementComponent,
    AlarmSecurityComponent,
    OverallEfficiencyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
