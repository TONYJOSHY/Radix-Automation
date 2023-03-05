import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DashboardService } from 'src/app/features/dashboard/service/dashboard-service.service';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

@Component({
  selector: 'app-count-bar-chart',
  templateUrl: './count-bar-chart.component.html',
  styleUrls: ['./count-bar-chart.component.scss']
})
export class CountBarChartComponent implements OnInit {

  public barChartOptions = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        color: this.utilityService.cssVariables.primary || '#0f48aa',
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
          max: 2000
        }
      }]
    },
    tooltips: {
      displayColors: false,
      backgroundColor: this.utilityService.cssVariables['gray-3'] || '#060606',
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']] + ' - ' + data['datasets'][tooltipItem[0]['datasetIndex']]['label'];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']];
        },
      },
    },
  };

  public barChartType: ChartType = 'bar';

  public barChartLabels: Label[] = [];
  public barChartColors = [
    { backgroundColor: this.utilityService.cssVariables.primary || '#e31c3d' },
    { backgroundColor: this.utilityService.cssVariables.success || '#4aa564' },
  ]

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Target Production' },
    { data: [], label: 'Actual Production' },
  ]

  countData: any;

  constructor(public utilityService: UtilityService,
    private dashBoardService: DashboardService) { }

  ngOnInit(): void {
    this.countData = this.dashBoardService.productionChartData[0];
    this.setChartData(this.countData)
  }

  setChartData(data) {
    this.barChartLabels = data.x_axis;
    this.barChartData = [
      { data: data.data_target, label: 'Target Production' },
      { data: data.data_actual, label: 'Actual Production' },
    ]
  }

  calenderSelection(item) {
    this.countData = this.dashBoardService.productionChartData[item.index];
    this.setChartData(this.countData)
  }

}
