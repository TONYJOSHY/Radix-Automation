import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  public barChartOptions = {
    // layout: {
    //   padding: { bottom: 20 }
    // },
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      labels: {
        // fontColor: this.utilityService.cssVariables.secondary || '#0f48aa',
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
          max: 2000,
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
    // datalabels: {
    //   anchor: 'end',
    //   align: 'end'
    // }
  };

  public barChartType: ChartType = 'bar';

  public barChartLabels: Label[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  public barChartColors = [
    { backgroundColor: this.utilityService.cssVariables.secondary || '#e31c3d' },
    { backgroundColor: this.utilityService.cssVariables['sea-green'] || '#4aa564' },
  ]

  public barChartData: ChartDataSets[] = [
    { data: [1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300], label: 'Target Production', fill: false },
    { data: [1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250], label: 'Actual Production', fill: false },
  ]

  public barChartPlugins = [{
    beforeInit: function (chart) {
      chart.legend.afterFit = function () {
        this.height = this.height + 15;
      }
    }
  }];


  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
  }

}
