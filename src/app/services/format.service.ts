import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {
  formatarCpfCnpj(valor: string): string {
    if (!valor) return '';
    
    // Remove caracteres não numéricos
    const apenasNumeros = valor.replace(/\D/g, '');
    
    // Verifica se é CPF ou CNPJ pelo número de dígitos
    if (apenasNumeros.length === 11) {
      // CPF: 000.000.000-00
      return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (apenasNumeros.length === 14) {
      // CNPJ: 00.000.000/0000-00
      return apenasNumeros.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    
    return valor; // Retorna o valor original se não corresponder a CPF nem CNPJ
  }

  formatarTelefone(valor: string): string {
    if (!valor) return '';
    
    // Remove caracteres não numéricos
    const apenasNumeros = valor.replace(/\D/g, '');
    
    // Verifica o tamanho para determinar se é celular ou telefone fixo
    if (apenasNumeros.length === 11) {
      // Celular: (00) 00000-0000
      return apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (apenasNumeros.length === 10) {
      // Fixo: (00) 0000-0000
      return apenasNumeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    
    return valor; // Retorna o valor original se não corresponder aos padrões
  }
} 