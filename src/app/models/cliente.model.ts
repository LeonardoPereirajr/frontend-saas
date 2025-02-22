export interface Cliente {
    id?: string;
    nome?: string;
    cpfCnpj?: string;
    email?: string;
    telefone?: string;
    endereco?: string;
    cidade?: string;
    dataCadastro?: string;
    tipoServico?: 'STORYMAKER' | 'ASSESSORIA';
    contato?: {
      nome?: string;
      cpf?: string;
      email?: string;
      telefone?: string;
    };
  }

  export interface ClienteResponse {
    content: Cliente[];
  }
  