import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';
import { DashboardService } from '../../service/dashboard-service.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  public barChartOptions = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    // fill: false,
    // fillColor: "rgba(220,220,220,0)",
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        fontSize: 14,
        boxWidth: 15,
        boxHeight: 15,
      }
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
          min: 0,
          // max: 2000,
        }
      }]
    },
    tooltips: {
      displayColors: false,
      backgroundColor: this.utilityService.cssVariables['gray-3'] || '#060606',
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']] + ' : 00' + ' - ' + data['datasets'][tooltipItem[0]['datasetIndex']]['label'];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']] + ' Units';
        },
      },
    },
  };

  public barChartType: ChartType = 'bar';

  public barChartLabels: Label[] = [];
  public barChartColors = [
    { backgroundColor: this.utilityService.cssVariables['light-blue'] || '#e31c3d' },
    { backgroundColor: this.utilityService.cssVariables['sea-green'] || '#4aa564' },
  ]

  public barChartData: ChartDataSets[] = [
    {
      data: [], label: 'Target Production', fill: false,
    },
    {
      data: [], label: 'Actual Production', fill: false,
    },
  ]

  productionData: any;

  constructor(public utilityService: UtilityService,
    private dashBoardService: DashboardService) { }

  ngOnInit(): void {
    this.productionData = this.dashBoardService.productionChartData[0];
    this.setChartData(this.productionData)
  }

  setChartData(data) {
    this.barChartLabels = data.x_axis;
    this.barChartData = [
      { data: data.data_target, label: 'Target Production' },
      { data: data.data_actual, label: 'Actual Production' },
    ]
  }

  calenderSelection(item) {
    this.productionData = this.dashBoardService.productionChartData[item.index];
    this.setChartData(this.productionData)
  }

}
