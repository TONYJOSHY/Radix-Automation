import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketComponent } from './websocket.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebSocketRoutingModule } from './websocket-routing.module';



@NgModule({
  declarations: [
    WebsocketComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WebSocketRoutingModule
  ]
})
export class WebsocketModule { }
