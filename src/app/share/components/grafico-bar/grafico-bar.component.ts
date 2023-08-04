import { Component, Input } from '@angular/core';
import { managerCheckGeral } from 'src/app/manager-check-in-out/models/manager-check-in-out.model';

@Component({
  selector: 'app-grafico-bar',
  templateUrl: './grafico-bar.component.html',
  styleUrls: ['./grafico-bar.component.scss'],
})
export class GraficoBarComponent {
  @Input() dadosGrafico: managerCheckGeral = {
    concluidasGeral: 0,
    parciaisGeral: 0,
    percentualGeral: 0,
    resultado: [],
  };

  calculaPorcentagemGrafico(value: any) {
    let porcentagemGrafico = 0;
    porcentagemGrafico = 600 - (value * 600) / 100;
    return porcentagemGrafico;
  }
}
