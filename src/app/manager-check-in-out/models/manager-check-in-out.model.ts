export interface managerCheck {
  cdUn: string;
  nmAg: string;
  parciais: number;
  concluidas: number;
  periodo: number;
  percentual: number;
  atividades: number;
  nmAgLabel: string;
  percentualConcluidas: number;
  percentualParcial: number;
  periodoParcial: number;
  periodoConcluidas: number;
}

export interface managerCheckGeral {
  concluidasGeral: number;
  parciaisGeral: number;
  percentualGeral: number;
  resultado: managerCheck[];
}
