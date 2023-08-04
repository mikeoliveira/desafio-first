import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotToCommaPipe } from './pipes/dot-to-comma.pipe';
import { GraficosDonutsBarComponent } from './components/graficos-donuts-bar/graficos-donuts-bar.component';
import { GraficoBarComponent } from './components/grafico-bar/grafico-bar.component';
import { GraficoDonutsComponent } from './components/grafico-donuts/grafico-donuts.component';

@NgModule({
  declarations: [
    DotToCommaPipe,
    GraficosDonutsBarComponent,
    GraficoBarComponent,
    GraficoDonutsComponent,
  ],
  imports: [CommonModule],
  exports: [DotToCommaPipe, GraficosDonutsBarComponent],
})
export class SharedModule {}
