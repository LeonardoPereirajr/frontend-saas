import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../../services/servico.service';
import { Servico } from '../../models/servico.model';

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {
  servicoSelecionado: Servico | null = null;

  constructor(
    private route: ActivatedRoute,
    private servicoService: ServicoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.servicoService.obterPorId(id).subscribe((servico) => {
        this.servicoSelecionado = servico;
      });
    }
  }

  imprimirProposta(): void {
    window.print();
  }
}
