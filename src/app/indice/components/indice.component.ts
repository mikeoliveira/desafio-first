import { Component, OnInit } from '@angular/core';
import { IndiceService } from 'src/app/services/indice/indice.service';
import { IndiceLastUpdated, IndiceWrapper } from '../models/indice.model';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss'],
})
export class IndiceComponent implements OnInit {
  indices: IndiceWrapper[] = [];
  indicesHighlight: IndiceWrapper[] = [];
  indicesDefault: IndiceWrapper[] = [];
  indiceLastUpdated: IndiceLastUpdated = { label: '', value: '' };
  errorMsg: string | null = '';

  constructor(private indiceService: IndiceService) {}

  ngOnInit(): void {
    this.getIndices();
    this.getIndiceLastUpdated();
  }

  getIndices() {
    this.errorMsg = '';
    this.indiceService.getIndices().subscribe(
      response => {
        this.indices = response;
        this.filterHighlightAndDefault(response);
      },
      error => {
        this.errorMsg =
          'ERRO AO EXECUTAR O SERVIÇO: Verifique se o json-server foi iniciado [npm run server]';
        console.error(this.errorMsg, error, error.status);
      }
    );
  }

  getIndiceLastUpdated() {
    this.indiceService.getIndiceLastUpdated().subscribe(
      response => {
        this.indiceLastUpdated = response;
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

  filterHighlightAndDefault(indicesList: IndiceWrapper[]) {
    indicesList.filter((indice: IndiceWrapper) => {
      if (indice.highlight === true) {
        this.indicesHighlight.push(indice);
      } else {
        this.indicesDefault.push(indice);
      }
    });
  }

  typeofValue(value: string | number) {
    return typeof value == 'string' ? 'box-highlight__font_green' : '';
  }

  logoSantanderToogle(value: string | number) {
    return value ? 'icon-santander' : 'icon-santander-negativo';
  }
}
