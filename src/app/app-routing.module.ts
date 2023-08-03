import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerCheckInOutComponent } from './manager-check-in-out/manager-check-in-out.component';

const routes: Routes = [
  {
    path: 'indice',
    loadChildren: () =>
      import('./indice/indice.module').then(m => m.IndiceModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/indice',
  },
  {
    path: 'check-in-check-out',
    component: ManagerCheckInOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
