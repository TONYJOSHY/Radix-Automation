import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageCropperModule } from 'ngx-image-cropper';

import { HeaderComponent } from './component/header/header.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule, ImageCropperModule],
  exports: [HeaderComponent, SideBarComponent],
})
export class CoreModule {}
