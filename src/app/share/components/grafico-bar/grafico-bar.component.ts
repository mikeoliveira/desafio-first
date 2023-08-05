import { Component, Input } from '@angular/core';
import {
  managerCheck,
  managerCheckGeral,
} from 'src/app/manager-check-in-out/models/manager-check-in-out.model';

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

  calculaPorcentagemGrafico(value: managerCheck) {
    console.log(value.percentualConcluidas + value.percentualParcial);
    if (100 - (value.percentualConcluidas + value.percentualParcial) > 0) {
      return 100 - (value.percentualConcluidas + value.percentualParcial);
    }
    return '0';
  }
}
