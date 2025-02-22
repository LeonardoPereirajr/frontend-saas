import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model'; // Apenas importando como tipo
import { ClienteService } from '../../services/cliente.service';

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
  
  constructor(private clienteService: ClienteService) {}


  ngOnInit(): void {
    this.obterClientes();
  }

  editarCliente(cliente: Cliente): void {
    this.clienteEdit = { ...cliente };
    this.isEditModalOpen = true;
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
        this.obterClientes(); // Atualiza a lista após a exclusão
      },
      (erro) => {
        console.error('Erro ao deletar cliente:', erro);
        alert('Erro ao deletar cliente!');
      }
    );
  }  
}