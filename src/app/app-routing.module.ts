import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
