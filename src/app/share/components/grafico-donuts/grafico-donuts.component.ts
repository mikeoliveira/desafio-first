import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { managerCheckGeral } from 'src/app/manager-check-in-out/models/manager-check-in-out.model';

@Component({
  selector: 'app-grafico-donuts',
  templateUrl: './grafico-donuts.component.html',
  styleUrls: ['./grafico-donuts.component.scss'],
})
export class GraficoDonutsComponent implements OnInit, OnChanges {
  @Input() dadosGrafico: managerCheckGeral = {
    concluidasGeral: 0,
    parciaisGeral: 0,
    percentualGeral: 0,
    resultado: [],
  };
  @Input() tituloDonuts = '';

  ngOnInit(): void {}

  ngOnChanges() {}

  calculaPorcentagemGrafico(value: number) {
    let porcentagemGrafico = 0;
    porcentagemGrafico = 600 - (value * 600) / 100;
    return porcentagemGrafico;
  }
}
