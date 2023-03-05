import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';
import { DashboardService } from '../../service/dashboard-service.service';

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
      align: 'center',
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
  public lineChartLabel: Label[] = [];

  public lineChartData: ChartDataSets[] = [
    {
      data: [],
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
      data: [],
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

  energyConsumptionData: any;

  constructor(public utilityService: UtilityService,
    private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.energyConsumptionData = this.dashboardService.energyConsumptionChart[0];
    this.setEnergyConsumption(this.energyConsumptionData)
  }

  setEnergyConsumption(data) {
    this.lineChartLabel = data.x_axis;
    this.lineChartData[0].data = data.data_energy_consumed;
    this.lineChartData[1].data = data.data_solar_production;
  }

  calenderSelection(item) {
    this.energyConsumptionData = this.dashboardService.energyConsumptionChart[item.index];
    this.setEnergyConsumption(this.energyConsumptionData)
  }

}
