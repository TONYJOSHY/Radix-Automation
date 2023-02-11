import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColdStorageComponent } from './cold-storage.component';
import { ColdStorageRoutingModule } from './cold-storage-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ColdStorageComponent
  ],
  imports: [
    CommonModule,
    ColdStorageRoutingModule,
    SharedModule
  ]
})
export class ColdStorageModule { }
