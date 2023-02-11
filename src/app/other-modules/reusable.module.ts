import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResizableModule } from 'angular-resizable-element';

const modules = [
  NgxSpinnerModule,
  FormsModule,
  ReactiveFormsModule,
  ResizableModule,
];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class ReusableModules {}
