import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from './machines.component';


const routes: Routes = [
   // { path: '', redirectTo: 'machines', pathMatch: 'prefix', data: { breadcrumb: '' } },
   {
      path: '',
      component: MachinesComponent
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class MachinesRoutingModule { }
