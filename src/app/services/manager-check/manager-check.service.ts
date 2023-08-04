import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {
  managerCheck,
  managerCheckGeral,
} from 'src/app/manager-check-in-out/models/manager-check-in-out.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerCheckService {
  private readonly API = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAberturaFechamentoLojas() {
    return this.http
      .get<managerCheck[]>(this.API + '/aberturaFechamento')
      .pipe(
        map(response => this.transformData(response, 'aberturaFechamento'))
      );
  }

  getAtividadesMensais() {
    return this.http
      .get<managerCheck[]>(this.API + '/atividadesMensais')
      .pipe(map(response => this.transformData(response, 'atividadesMensais')));
  }

  private transformData(response: managerCheck[], typeResquest: string) {
    const responseGeral: managerCheckGeral = {
      concluidasGeral: 0,
      parciaisGeral: 0,
      percentualGeral: 0,
      resultado: [],
    };

    responseGeral.resultado = response;
    responseGeral.resultado.forEach((element, index) => {
      element.nmAgLabel = 'Ag ' + String(Number(element.cdUn)).padStart(2, '0');
      responseGeral.concluidasGeral += element.concluidas;
      if (typeResquest === 'aberturaFechamento') {
        element.percentualConcluidas =
          (element.concluidas * 100) / element.parciais;
        element.percentualParcial = 100 - element.percentualConcluidas;
        responseGeral.parciaisGeral += element.parciais;
      } else if (typeResquest === 'atividadesMensais') {
        responseGeral.parciaisGeral += element.atividades;
      }
      element.periodoConcluidas =
        (element.percentualConcluidas * element.periodo) / 100;
      element.periodoParcial =
        (element.percentualParcial * element.periodo) / 100;
      if (responseGeral.resultado.length - 1 == index) {
        responseGeral.percentualGeral =
          (responseGeral.concluidasGeral * 100) / responseGeral.parciaisGeral;
      }
    });

    console.log('heihei', responseGeral);
    return responseGeral;
  }
}
