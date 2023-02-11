import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColdStorageComponent } from './cold-storage.component';


const routes: Routes = [
   // { path: '', redirectTo: 'cold-storage', pathMatch: 'prefix', data: { breadcrumb: '' } },
   {
      path: '',
      component: ColdStorageComponent
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class ColdStorageRoutingModule { }
