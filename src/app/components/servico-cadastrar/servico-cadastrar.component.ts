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
    nomeCliente: '',
    tipoServico: 'ASSESSORIA',
    descricao: '',

    valorHora: 0,
    horasMensais: 0,
    valorMensal: 0,

    deslocamentoKm: 0,
    custoPorKm: 0,
    totalCustoDeslocamento: 0,

    horasServico: 0, 
    valorTotal: 0
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

  calcularTotal(): void {
    if (this.novoServico.tipoServico === 'STORYMAKER') {
      const deslocamento = this.novoServico.deslocamentoKm || 0;
      const custoKm = this.novoServico.custoPorKm || 0;
      const valorHora = this.novoServico.valorHora || 0;
      const horasServico = this.novoServico.horasServico || 0;

      this.novoServico.totalCustoDeslocamento = deslocamento * custoKm;

      this.novoServico.valorTotal = this.novoServico.totalCustoDeslocamento + (valorHora * horasServico);
    }
  }

  aoSelecionarTipo(tipo: string): void {
    this.novoServico.tipoServico = tipo as 'STORYMAKER' | 'ASSESSORIA';
  }

  aoSalvar(): void {
    if (!this.novoServico.clienteId) {
      alert("Selecione um cliente antes de salvar!");
      return;
    }
  
    this.servicoService.salvar(this.novoServico).subscribe(() => {
      alert('Serviço cadastrado com sucesso!');
    });
  }
  

  voltar(): void {
    this.location.back(); 
  }
}
