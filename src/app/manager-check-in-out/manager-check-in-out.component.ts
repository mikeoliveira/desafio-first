import { Component, OnInit } from '@angular/core';
import { ManagerCheckService } from '../services/manager-check/manager-check.service';
import { forkJoin } from 'rxjs';
import { managerCheckGeral } from './models/manager-check-in-out.model';

@Component({
  selector: 'app-manager-check-in-out',
  templateUrl: './manager-check-in-out.component.html',
  styleUrls: ['./manager-check-in-out.component.scss'],
})
export class ManagerCheckInOutComponent implements OnInit {
  carregando = true;
  errorMsg: string | null = '';

  aberturaFechamentoLojas: managerCheckGeral = {
    concluidasGeral: 0,
    parciaisGeral: 0,
    percentualGeral: 0,
    resultado: [],
  };
  atividadesMensais: managerCheckGeral = {
    concluidasGeral: 0,
    parciaisGeral: 0,
    percentualGeral: 0,
    resultado: [],
  };
  constructor(private managerCheckService: ManagerCheckService) {}

  ngOnInit(): void {
    forkJoin({
      aberturaFechamentoLojas:
        this.managerCheckService.getAberturaFechamentoLojas(),
      atividadesMensais: this.managerCheckService.getAtividadesMensais(),
    }).subscribe(
      response => {
        console.log('component', response);
        this.aberturaFechamentoLojas = response.aberturaFechamentoLojas;
        this.atividadesMensais = response.atividadesMensais;
        this.carregando = false;
      },
      error => {
        this.carregando = false;
        this.errorMsg =
          'ERRO AO EXECUTAR O SERVIÇO: Verifique se o json-server foi iniciado [npm run server]';
        console.error(this.errorMsg, error, error.status);
      }
    );
  }
}
