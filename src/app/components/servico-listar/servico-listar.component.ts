import { Component, OnInit } from '@angular/core';
import { Servico } from '../../models/servico.model';
import { ServicoService } from '../../services/servico.service';

@Component({
  selector: 'app-servico-listar',
  templateUrl: './servico-listar.component.html',
  styleUrls: ['./servico-listar.component.css']
})
export class ServicoListarComponent implements OnInit {
  servicos: Servico[] = [];
  isModalOpen = false; 

  constructor(private servicoService: ServicoService) {}

  ngOnInit(): void {
    this.obterServicos();
  }

  obterServicos(): void {
    this.servicoService.listarTodos().subscribe(
      (dados) => {
        this.servicos = dados;
        console.log('Serviços recebidos:', dados);
      },
      (erro) => {
        console.error('Erro ao buscar serviços:', erro);
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