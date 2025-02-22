import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cliente-cadastrar',
  templateUrl: './cliente-cadastrar.component.html',
  styleUrls: ['./cliente-cadastrar.component.css']
})
export class ClienteCadastrarComponent {
  novoCliente: Cliente = {
    nome: '',
    cpfCnpj: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    dataCadastro: '',
    tipoServico: 'STORYMAKER',
    contato: {
      nome: '',
      cpf: '',
      email: '',
      telefone: ''
    }
  };

  // Controla exibição do contato (ex. se for PJ, etc.)
  mostrarContato: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router, private location: Location) {}

  aoSelecionarTipo(tipo: string): void {
    this.novoCliente.tipoServico = tipo as 'STORYMAKER' | 'ASSESSORIA';
  }

  aoSalvar(): void {
    // Chama o service para salvar
    this.clienteService.salvar(this.novoCliente).subscribe(
      (clienteSalvo) => {
        console.log('Cliente cadastrado com sucesso:', clienteSalvo);
        // Após cadastrar, podemos navegar de volta para a listagem ou outra página
        this.router.navigate(['/clientes/listar']);
      },
      (erro) => {
        console.error('Erro ao cadastrar cliente:', erro);
      }
    );
  }

  voltar(): void {
    this.location.back(); // Volta para a página anterior
  }
}