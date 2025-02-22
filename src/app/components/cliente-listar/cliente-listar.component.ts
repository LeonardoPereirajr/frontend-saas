import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {
  clientes: Cliente[] = [];
  isModalOpen = false; 

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.obterClientes();
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
    this.isModalOpen = false;
  }
}