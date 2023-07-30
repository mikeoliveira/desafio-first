import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceComponent } from './component/indice.component';
import { IndiceRoutingModule } from './indice-routing.module';

@NgModule({
  declarations: [IndiceComponent],
  imports: [CommonModule, IndiceRoutingModule],
})
export class IndiceModule {}
