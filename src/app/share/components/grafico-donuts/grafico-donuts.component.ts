import { Component, Input, OnInit } from '@angular/core';
import { managerCheckGeral } from 'src/app/manager-check-in-out/models/manager-check-in-out.model';

@Component({
  selector: 'app-grafico-donuts',
  templateUrl: './grafico-donuts.component.html',
  styleUrls: ['./grafico-donuts.component.scss'],
})
export class GraficoDonutsComponent implements OnInit {
  @Input() dadosGrafico: managerCheckGeral = {
    concluidasGeral: 0,
    parciaisGeral: 0,
    percentualGeral: 0,
    resultado: [],
  };
  @Input() tituloDonuts = '';

  ngOnInit(): void {
    console.log(this.dadosGrafico);
  }
}
