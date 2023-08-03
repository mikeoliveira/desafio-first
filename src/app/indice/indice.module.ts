import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceComponent } from './components/indice.component';
import { IndiceRoutingModule } from './indice-routing.module';

@NgModule({
  declarations: [IndiceComponent],
  imports: [CommonModule, IndiceRoutingModule],
  exports: [],
})
export class IndiceModule {}
