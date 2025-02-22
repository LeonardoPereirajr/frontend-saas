export interface Servico {
    id?: string;
    clienteId?: string;              
    tipoServico?: 'STORYMAKER' | 'ASSESSORIA';
  
    // para assessoria
    valorHora?: number;
    horasMensais?: number;
    valorMensal?: number;
  
    // para storymaker
    deslocamentoKm?: number;
    custoPorKm?: number;
    totalCustoDeslocamento?: number;
  }