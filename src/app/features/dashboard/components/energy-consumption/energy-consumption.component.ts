import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

@Component({
  selector: 'app-energy-consumption',
  templateUrl: './energy-consumption.component.html',
  styleUrls: ['./energy-consumption.component.scss']
})
export class EnergyConsumptionComponent implements OnInit {

  public lineChartOptions = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    elements: { line: { tension: 0 } },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        fontSize: 14,
        boxWidth: 15,
        boxHeight: 15
      },
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: this.utilityService.cssVariables['gray-1'],
          lineWidth: 0.15,
          zeroLineColor: this.utilityService.cssVariables.white || '#FFFFFF'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: this.utilityService.cssVariables['gray-1'],
          lineWidth: 0.15,
          zeroLineColor: this.utilityService.cssVariables.white || '#FFFFFF'
        },
        ticks: {
          beginAtZero: true,
        },
      }]
    },
    tooltips: {
      displayColors: false,
      backgroundColor: this.utilityService.cssVariables['gray-3'] || '#060606',
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return Math.round(data['datasets'][0]['data'][tooltipItem['index']]);
        },
      },
    },
  };

  public lineChartType: ChartType = 'line';
  public lineChartLabel: Label[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

  public lineChartData: ChartDataSets[] = [
    {
      data: [110, 120, 125, 130, 125, 115, 115, 120, 125, 130, 125, 115, 115, 120, 125, 130, 125, 115, 115, 120, 125, 130, 125, 115],
      label: 'Energy Consumed',
      backgroundColor: this.utilityService.cssVariables.secondary || '#e31c3d',
      borderColor: this.utilityService.cssVariables.secondary || '#e31c3d',
      pointBackgroundColor: this.utilityService.cssVariables.secondary || '#e31c3d',
      pointBorderColor: this.utilityService.cssVariables.secondary || '#e31c3d',
      pointHoverBackgroundColor: this.utilityService.cssVariables.secondary || '#e31c3d',
      pointHoverBorderColor: this.utilityService.cssVariables.secondary || '#e31c3d',
      fill: false,
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0, 10, 20, 35, 45, 50, 45, 50, 45, 50, 45, 30, 20, 10, 0, 0, 0, 0],
      label: 'Solar Production',
      backgroundColor: this.utilityService.cssVariables.success || '#4aa564',
      borderColor: this.utilityService.cssVariables.success || '#4aa564',
      pointBackgroundColor: this.utilityService.cssVariables.success || '#4aa564',
      pointBorderColor: this.utilityService.cssVariables.success || '#4aa564',
      pointHoverBackgroundColor: this.utilityService.cssVariables.success || '#4aa564',
      pointHoverBorderColor: this.utilityService.cssVariables.success || '#4aa564',
      fill: false,
    }
  ]

  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
  }

}
