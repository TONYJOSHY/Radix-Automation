import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
   // { path: '', redirectTo: 'home', pathMatch: 'prefix', data: { breadcrumb: '' } },
   {
      path: '',
      component: FeaturesComponent,
      children: [
         { path: '', redirectTo: 'dashboard', pathMatch: 'prefix', data: { breadcrumb: '' } },
         {
            path: 'dashboard',
            loadChildren: () =>
               import('./dashboard/dashboard.module').then(
                  (m) => m.DashboardModule
               ),
         },
         {
            path: 'machines',
            loadChildren: () =>
               import('./machines/machines.module').then(
                  (m) => m.MachinesModule
               ),
         },
         {
            path: 'cold-storage',
            loadChildren: () =>
               import('./cold-storage/cold-storage.module').then(
                  (m) => m.ColdStorageModule
               ),
         },
      ],
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class FeaturesRoutingModule { }
