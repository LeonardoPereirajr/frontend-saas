import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model'; // Apenas importando como tipo
import { ClienteService } from '../../services/cliente.service';
import { FormatService } from '../../services/format.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  clientes: Cliente[] = [];
  isModalOpen = false; 
  clienteEdit: Cliente = {} as Cliente;
  isEditModalOpen = false;
  
  constructor(
    private clienteService: ClienteService,
    private formatService: FormatService
  ) {}

  ngOnInit(): void {
    this.obterClientes();
  }

  editarCliente(cliente: Cliente): void {
    this.clienteEdit = { ...cliente };
    this.isEditModalOpen = true;
  }

  formatarCpfCnpj(valor: string): string {
    return this.formatService.formatarCpfCnpj(valor);
  }

  formatarTelefone(valor: string): string {
    return this.formatService.formatarTelefone(valor);
  }

  obterClientes(): void {
    this.clienteService.listarTodos().subscribe(
      (dados) => {
        this.clientes = dados;
        console.log('Clientes recebidos:', dados);
      },
      (erro) => {
        console.error('Erro ao buscar clientes:', erro);
      }
    );
  }

  abrirModal(): void {
    this.isModalOpen = true;
  }

  fecharModal(): void {
    this.isEditModalOpen = false; 
    this.clienteEdit = {} as Cliente; 
  }

  atualizarCliente(): void {
    // Remover máscaras antes de enviar para o servidor
    if (this.clienteEdit.cpfCnpj) {
      this.clienteEdit.cpfCnpj = this.clienteEdit.cpfCnpj.replace(/\D/g, '');
    }
    if (this.clienteEdit.telefone) {
      this.clienteEdit.telefone = this.clienteEdit.telefone.replace(/\D/g, '');
    }
    if (this.clienteEdit.contato?.telefone) {
      this.clienteEdit.contato.telefone = this.clienteEdit.contato.telefone.replace(/\D/g, '');
    }

    this.clienteService.atualizar(this.clienteEdit).subscribe(
      () => {
        alert('Cliente atualizado com sucesso!');
        this.fecharModal();
        this.obterClientes(); 
      },
      (erro) => {
        console.error('Erro ao atualizar cliente:', erro);
        alert('Erro ao atualizar cliente!');
      }
    );
  }

  deletarCliente(cliente: Cliente): void {
    if (!confirm(`Deseja realmente deletar o cliente ${cliente.nome}?`)) {
      return;
    }
    this.clienteService.deletar(cliente.id).subscribe(
      () => {
        alert('Cliente deletado com sucesso!');
        this.obterClientes(); 
      },
      (erro) => {
        console.error('Erro ao deletar cliente:', erro);
        alert('Erro ao deletar cliente!');
      }
    );
  }  
}