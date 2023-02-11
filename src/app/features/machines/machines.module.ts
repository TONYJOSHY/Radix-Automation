import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachinesComponent } from './machines.component';
import { MachinesRoutingModule } from './machines-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MachinesComponent
  ],
  imports: [
    CommonModule,
    MachinesRoutingModule,
    SharedModule
  ]
})
export class MachinesModule { }
