import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceComponent } from './components/indice.component';
import { IndiceRoutingModule } from './indice-routing.module';
import { SharedModule } from '../share/share.module';

@NgModule({
  declarations: [IndiceComponent],
  imports: [CommonModule, IndiceRoutingModule, SharedModule],
  exports: [],
})
export class IndiceModule {}
