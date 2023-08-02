import { Component, OnInit } from '@angular/core';
import { IndiceService } from 'src/app/services/indice/indice.service';
import { IndiceWrapper } from '../models/indiceModel';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss'],
})
export class IndiceComponent implements OnInit {
  indices: IndiceWrapper[] = [];
  indicesHighlight: IndiceWrapper[] = [];
  indicesDefault: IndiceWrapper[] = [];
  constructor(private indiceService: IndiceService) {
    console.log('teste');
  }

  ngOnInit(): void {
    this.getIndices();
  }

  getIndices() {
    this.indiceService.getIndices().subscribe(
      response => {
        this.indices = response;
        this.filterHighlightAndDefault(response);
        console.log(this.indicesHighlight, this.indicesDefault);
      },
      error => {
        console.error(
          'ERRO AO EXECUTAR O SERVIÇO: Verifique se o json-server foi iniciado [npm run server]',
          error,
          error.status
        );
      }
    );
  }

  filterHighlightAndDefault(indicesList: any) {
    indicesList.filter((indice: IndiceWrapper) => {
      if (indice.highlight === true) {
        this.indicesHighlight.push(indice);
      } else {
        this.indicesDefault.push(indice);
      }
    });
  }

  logoSantanderToogle(value: string | number) {
    return value ? 'logo-santander' : 'logo-santander-negativo';
  }
}
