import { Component, OnInit } from '@angular/core';
import { Servico } from '../../models/servico.model';
import { ServicoService } from '../../services/servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico-listar',
  templateUrl: './servico-listar.component.html',
  styleUrls: ['./servico-listar.component.css']
})
export class ServicoListarComponent implements OnInit {
  servicos: Servico[] = [];
  isModalOpen = false;  
  descricaoSelecionada: string = ''; 
  isEditModalOpen = false; 
  servicoEdit: Servico | null = null;
  isViewModalOpen = false;
  servicoSelecionado: Servico | null = null;

  constructor(private servicoService: ServicoService, private router: Router) {}

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

  abrirModal(descricao: string): void {
    this.descricaoSelecionada = descricao;
    this.isModalOpen = true;
  }

  abrirVisualizacaoServico(servico: Servico): void {
    this.servicoSelecionado = { ...servico };
    this.isViewModalOpen = true;
  }

  fecharVisualizacaoModal(): void {
    this.isViewModalOpen = false;
    this.servicoSelecionado = null;
  }

  fecharModal(): void {
    this.isModalOpen = false;
    this.descricaoSelecionada = '';
  }
  editarServico(servico: Servico): void {
    this.servicoEdit = { ...servico }; 
    this.isEditModalOpen = true;
  }

  // gerarProposta(servico: Servico): void {
  //   window.open(`http://localhost:8080/api/pdf/proposta/${servico.id}`, '_blank');
  // }  

  gerarProposta(servico: Servico): void {
    if (servico.id) {
      this.router.navigate(['/proposta', servico.id]);
    }
  }

  atualizarServico(): void {
    if (this.servicoEdit && this.servicoEdit.id) {
      this.servicoService.atualizar(this.servicoEdit.id, this.servicoEdit).subscribe(
        (servicoAtualizado) => {
          this.servicos = this.servicos.map(s => s.id === servicoAtualizado.id ? servicoAtualizado : s);
          alert('Serviço atualizado com sucesso!');
          this.fecharEditModal();
        },
        (erro) => {
          console.error('Erro ao atualizar serviço:', erro);
          alert('Erro ao atualizar serviço. Tente novamente.');
        }
      );
    }
  }
  fecharEditModal(): void {
    this.isEditModalOpen = false;
    this.servicoEdit = null;
  }
  deletarServico(servico: Servico): void {
    if (confirm(`Tem certeza que deseja excluir o serviço para ${servico.nomeCliente}?`)) {
      this.servicoService.deletar(servico.id!).subscribe(
        () => {
          this.servicos = this.servicos.filter(s => s.id !== servico.id);
          alert('Serviço excluído com sucesso!');
        },
        (erro) => {
          console.error('Erro ao excluir serviço:', erro);
          alert('Erro ao excluir serviço. Tente novamente.');
        }
      );
    }
  }
}