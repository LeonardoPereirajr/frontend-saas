import { Component, OnInit } from '@angular/core';
import { Servico } from '../../models/servico.model';
import { ServicoService } from '../../services/servico.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

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

  constructor(private servicoService: ServicoService, private router: Router , private http: HttpClient) {}

  ngOnInit(): void {
    this.servicoService.listarTodos().subscribe(
      (dados) => {
        console.log('Serviços recebidos:', dados);
        this.servicos = dados; 
      },
      (erro) => {
        console.error('Erro ao carregar os serviços:', erro);
      }
    );
  }


  obterServicos() {
    this.http.get('http://localhost:8080/servicos').subscribe({
      next: (response) => {
        console.log('Sucesso:', response);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Erro completo:', err);
        console.log('Status:', err.status); 
        console.log('Mensagem:', err.error);
      }
    });
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
    console.log(`Editando serviço com ID: ${servico.id}`);
    this.servicoEdit = { ...servico };
    this.isEditModalOpen = true;
  }
  
  
  excluirServico(servico: Servico, event: Event): void {
    event.stopPropagation(); 
    if (confirm(`Tem certeza que deseja excluir o serviço para ${servico.nomeCliente}?`)) {
      this.servicoService.deletar(servico.id!).subscribe(
        () => {
          this.servicos = this.servicos.filter(s => s.id !== servico.id);
          alert('Serviço excluído com sucesso!');
        },
        (erro) => {
          console.error('Erro ao excluir serviço:', erro);
          alert('Erro ao excluir serviço.');
        }
      );
    }
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
      const servicoParaAtualizar = {
        ...this.servicoEdit,
        clienteId: this.servicoEdit.clienteId || 
                   this.servicos.find(s => s.id === this.servicoEdit!.id)?.clienteId
      };
  
      this.servicoService.atualizar(this.servicoEdit.id, servicoParaAtualizar).subscribe(
        (servicoAtualizado) => {
          this.servicos = this.servicos.map(s => 
            s.id === servicoAtualizado.id 
              ? { ...servicoAtualizado, nomeCliente: s.nomeCliente }  
              : s
          );
          alert('Serviço atualizado com sucesso!');
          this.fecharEditModal();
        },
        (erro) => {
          alert('Erro ao atualizar serviço. Tente novamente.');
        }
      );
    }
  } 
  
  
  fecharEditModal(): void {
    this.isEditModalOpen = false;
    this.servicoEdit = null;
  }
}