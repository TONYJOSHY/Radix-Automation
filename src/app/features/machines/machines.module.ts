import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesComponent } from './machines.component';
import { MachinesRoutingModule } from './machines-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EfficiencyChartComponent } from './components/efficiency-chart/efficiency-chart.component';
import { CountBarChartComponent } from './components/count-bar-chart/count-bar-chart.component';
import { PerformanceTileComponent } from './components/performance-tile/performance-tile.component';
import { Machine1Component } from './components/machine1/machine1.component';
import { Machine2Component } from './components/machine2/machine2.component';
import { Machine3Component } from './components/machine3/machine3.component';



@NgModule({
  declarations: [
    MachinesComponent,
    EfficiencyChartComponent,
    CountBarChartComponent,
    PerformanceTileComponent,
    Machine1Component,
    Machine2Component,
    Machine3Component
  ],
  imports: [
    CommonModule,
    MachinesRoutingModule,
    SharedModule
  ]
})
export class MachinesModule { }
