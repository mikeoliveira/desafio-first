import { Component, Input } from '@angular/core';
import { managerCheckGeral } from 'src/app/manager-check-in-out/models/manager-check-in-out.model';

@Component({
  selector: 'app-graficos-donuts-bar',
  templateUrl: './graficos-donuts-bar.component.html',
  styleUrls: ['./graficos-donuts-bar.component.scss'],
})
export class GraficosDonutsBarComponent {
  @Input() dadosGrafico: managerCheckGeral = {
    concluidasGeral: 0,
    parciaisGeral: 0,
    percentualGeral: 0,
    resultado: [],
  };
  @Input() tituloGrafico = '';
  @Input() tituloDonuts = '';
}
