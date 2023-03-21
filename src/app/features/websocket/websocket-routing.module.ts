import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebsocketComponent } from './websocket.component';

const routes: Routes = [
  // { path: '', redirectTo: 'machines', pathMatch: 'prefix', data: { breadcrumb: '' } },
  {
    path: '',
    component: WebsocketComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebSocketRoutingModule { }
