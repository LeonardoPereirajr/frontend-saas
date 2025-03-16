import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartData } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ServicoService } from '../../services/servico.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, NgChartsModule]
})
export class DashboardComponent implements OnInit {
  metaMensal = 10000;
  totalFaturamento = 0;

  constructor(private servicoService: ServicoService) {}

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };

  barChartLabels: string[] = [];
  barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [{ data: [], label: 'Faturamento' }]
  };

  gaugeChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '80%', 
    rotation: -90, 
    circumference: 180, 
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true } 
    }
  };  

  gaugeChartLabels: string[] = ['Faturamento'];
  gaugeChartData: ChartData<'doughnut'> = {
    labels: this.gaugeChartLabels,
    datasets: [
      {
        data: [0, this.metaMensal], 
        backgroundColor: ['#00E396', '#E0E0E0'],
        borderWidth: 0 
      }
    ]
  };

  ngOnInit(): void {
    this.carregarDados();
  }

  carregarDados(): void {
    this.servicoService.listarTodos().subscribe(
      (servicos) => {
        const clientesMap = new Map<string, number>();

        servicos.forEach(servico => {
          const valorAtual = clientesMap.get(servico.nomeCliente) || 0;
          clientesMap.set(servico.nomeCliente, valorAtual + servico.valorTotal);
        });

        this.barChartLabels = Array.from(clientesMap.keys());
        this.barChartData = {
          labels: this.barChartLabels,
          datasets: [{ data: Array.from(clientesMap.values()), label: 'Faturamento' }]
        };

        this.totalFaturamento = Array.from(clientesMap.values()).reduce((a, b) => a + b, 0);
        this.gaugeChartData = {
          labels: this.gaugeChartLabels,
          datasets: [{ data: [this.totalFaturamento, this.metaMensal - this.totalFaturamento], backgroundColor: ['#00E396', '#E0E0E0'] }]
        };
      },
      (error) => {
        console.error('Erro ao buscar dados de serviços:', error);
      }
    );
  }
}
