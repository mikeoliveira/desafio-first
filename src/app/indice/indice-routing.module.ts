import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiceComponent } from './components/indice.component';

const routes: Routes = [
  {
    path: '',
    component: IndiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndiceRoutingModule {}
