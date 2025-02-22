import { Component } from '@angular/core';
import { Servico } from '../../models/servico.model';
import { ServicoService } from '../../services/servico.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-servico-cadastrar',
  templateUrl: './servico-cadastrar.component.html',
  styleUrls: ['./servico-cadastrar.component.css']
})
export class ServicoCadastrarComponent {
  novoServico: Servico = {
    clienteId: '',
    tipoServico: 'ASSESSORIA',

    valorHora: 0,
    horasMensais: 0,
    valorMensal: 0,

    deslocamentoKm: 0,
    custoPorKm: 0,
    totalCustoDeslocamento: 0
  };
  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    // Chama o backend para buscar todos os clientes
    this.clienteService.listarTodos().subscribe(
      (dados) => {
        this.clientes = dados;
      },
      (erro) => {
        console.error('Erro ao carregar clientes:', erro);
      }
    );
  }

  clientes: Cliente[] = [];
  
  constructor(private servicoService: ServicoService, private clienteService: ClienteService, private router: Router, private location: Location ) {}

  aoSelecionarTipo(tipo: string): void {
    this.novoServico.tipoServico = tipo as 'STORYMAKER' | 'ASSESSORIA';
  }

  aoSalvar(): void {
    this.servicoService.salvar(this.novoServico).subscribe(
      (servicoSalvo) => {
        console.log('Serviço cadastrado com sucesso:', servicoSalvo);
        // Após cadastrar, podemos navegar para listagem de serviços
        this.router.navigate(['/servicos/listar']);
      },
      (erro) => {
        console.error('Erro ao cadastrar serviço:', erro);
      }
    );
  }

  voltar(): void {
    this.location.back(); // Volta para a página anterior
  }
}
