import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceComponent } from './components/indice.component';
import { IndiceRoutingModule } from './indice-routing.module';
import { DotToCommaPipe } from '../pipes/dot-to-comma.pipe';

@NgModule({
  declarations: [IndiceComponent, DotToCommaPipe],
  imports: [CommonModule, IndiceRoutingModule],
  exports: [],
})
export class IndiceModule {}
