import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { CoreModule } from '../core/core.module';
import { MaterialModule } from '../other-modules/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule, 
    FeaturesRoutingModule, 
    CoreModule,
    MaterialModule,
    FormsModule
],
})
export class FeaturesModule {}
