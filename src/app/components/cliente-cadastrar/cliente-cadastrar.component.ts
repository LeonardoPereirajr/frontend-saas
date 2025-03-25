import { Component, AfterViewInit } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import IMask from 'imask';

@Component({
  selector: 'app-cliente-cadastrar',
  templateUrl: './cliente-cadastrar.component.html',
  styleUrls: ['./cliente-cadastrar.component.css'],
})
export class ClienteCadastrarComponent implements AfterViewInit {
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
      telefone: '',
    },
  };

  tipoPessoa: string = 'cpf'; 
  private maskInstance: any;
  private cpfCnpjElement: HTMLInputElement;
  private telefoneMaskInstance: any;
  private telefoneElement: HTMLInputElement;
  private contatoTelefoneElement: HTMLInputElement;
  private contatoTelefoneMaskInstance: any;
  private contatoCpfElement: HTMLInputElement;
  private contatoCpfMaskInstance: any;
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private location: Location
  ) {}


  atualizarMascara() {
    if (this.cpfCnpjElement) {
      
      if (this.maskInstance) {
        this.maskInstance.destroy();
      }


      this.maskInstance = IMask(this.cpfCnpjElement, {
        mask: this.tipoPessoa === 'cpf' ? '000.000.000-00' : '00.000.000/0000-00',
        lazy: false,
        overwrite: true
      });
    }
  }

  aplicarMascaraTelefone(elemento: HTMLInputElement): any {
    return IMask(elemento, {
      mask: [
        { mask: '(00) 0000-0000' },  
        { mask: '(00) 00000-0000' }  
      ],
      dispatch: function (appended: string, dynamicMasked: any) {
        const number = (dynamicMasked.value + appended).replace(/\D/g, '');
        return dynamicMasked.compiledMasks[number.length <= 10 ? 0 : 1];
      }
    });
  }

  aplicarMascaraCpf(elemento: HTMLInputElement): any {
    return IMask(elemento, {
      mask: '000.000.000-00',
      lazy: false,
      overwrite: true
    });
  }

  ngAfterViewInit() {
    this.cpfCnpjElement = document.getElementById('cpfCnpj') as HTMLInputElement;
    this.telefoneElement = document.getElementById('telefone') as HTMLInputElement;
    this.contatoTelefoneElement = document.getElementById('contatoTelefone') as HTMLInputElement;
    this.contatoCpfElement = document.getElementById('contatoCpf') as HTMLInputElement;
    
    this.atualizarMascara();
    
    if (this.telefoneElement) {
      this.telefoneMaskInstance = this.aplicarMascaraTelefone(this.telefoneElement);
    }
    
    if (this.contatoTelefoneElement) {
      this.contatoTelefoneMaskInstance = this.aplicarMascaraTelefone(this.contatoTelefoneElement);
    }

    if (this.contatoCpfElement) {
      this.contatoCpfMaskInstance = this.aplicarMascaraCpf(this.contatoCpfElement);
    }
  }

  ngOnDestroy() {
   
    if (this.maskInstance) {
      this.maskInstance.destroy();
    }
    if (this.telefoneMaskInstance) {
      this.telefoneMaskInstance.destroy();
    }
    if (this.contatoTelefoneMaskInstance) {
      this.contatoTelefoneMaskInstance.destroy();
    }
    if (this.contatoCpfMaskInstance) {
      this.contatoCpfMaskInstance.destroy();
    }
  }

  mostrarContato: boolean = false;
  isCadastroModalOpen: boolean = false;

  abrirCadastroModal() {
    this.isCadastroModalOpen = true;
  }

  fecharCadastroModal() {
    this.router.navigate(['/clientes/listar']);
  }

  aoSelecionarTipo(tipo: string): void {
    this.novoCliente.tipoServico = tipo as 'STORYMAKER' | 'ASSESSORIA';
  }

  limparMensagens() {
    this.mensagemSucesso = '';
    this.mensagemErro = '';
  }

  aoSalvar() {
    this.limparMensagens();

    if (this.novoCliente.cpfCnpj) {
      this.novoCliente.cpfCnpj = this.novoCliente.cpfCnpj.replace(/[^\d]/g, '');
    }
    
    if (this.novoCliente.telefone) {
      this.novoCliente.telefone = this.novoCliente.telefone.replace(/\D/g, '');
    }
    if (this.novoCliente.contato?.telefone) {
      this.novoCliente.contato.telefone = this.novoCliente.contato.telefone.replace(/\D/g, '');
    }

  
    if (this.novoCliente.contato?.cpf) {
      this.novoCliente.contato.cpf = this.novoCliente.contato.cpf.replace(/\D/g, '');
    }
    
    this.clienteService.salvar(this.novoCliente).subscribe(
      (response) => {
        this.mensagemSucesso = 'Cliente cadastrado com sucesso!';
        setTimeout(() => {
          this.router.navigate(['/clientes/listar']);
        }, 2000); // Aguarda 2 segundos antes de redirecionar
      },
      (error) => {
        console.error('Erro ao cadastrar cliente:', error);
        this.mensagemErro = 'Erro ao cadastrar cliente. Por favor, tente novamente.';
      }
    );
  }

  voltar(): void {
    this.router.navigate(['/clientes/listar']);
  }
}
