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
      position: 'top',
      align: 'end',
      labels: {
        color: this.utilityService.cssVariables.primary || '#0f48aa',
        fontSize: 14,
        boxWidth: 15,
        boxHeight: 15,
      }
    },
    scales: {
      xAxes: [{
        // barThickness: 30,
        // maxBarThickness: 30,
        gridLines: {
          zeroLineColor: this.utilityService.cssVariables.white || '#FFFFFF'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          zeroLineColor: this.utilityService.cssVariables.white || '#FFFFFF'
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          callback: function(value, index, values) {
            if(value){
              const roundedNumber = value
              if(roundedNumber.toString().length < 4) return value ;
              else if(roundedNumber.toString().length < 7) return (value / 1000);
              else return (value / 1000000);
            }
          },
        }
      }]
    },
    tooltips: {
      displayColors: false,
      backgroundColor: this.utilityService.cssVariables['gray-3'] || '#060606',
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']] + ' - ' + data['datasets'][tooltipItem[0]['datasetIndex']]['label'];
        },
        label: function(tooltipItem, data) {
          return data['datasets'][tooltipItem['datasetIndex']]['data'][tooltipItem['index']];
        },
      },
    },
    datalabels: {
      anchor: 'end',
      align: 'end'
    }
  };

  public barChartType: ChartType = 'bar';

  public barChartLabels: Label[] = [ '1', '2', '3', '4', '5' ];
  public barChartColors = [
    { backgroundColor: this.utilityService.cssVariables.danger || '#e31c3d' },
    { backgroundColor: this.utilityService.cssVariables.success || '#4aa564' },
  ]

  public barChartData: ChartDataSets[] = [
    { data: [ 30, 45, 60, 20, 30 ], label: 'Target Production' } ,
    { data: [ 5, 10, 15, 10, 7 ], label: 'Actual Production' } ,
  ]

  public barChartPlugins = [{
    beforeInit: function (chart) {
      chart.legend.afterFit = function(){
        this.height = this.height + 15;
      }
    }
  }];


  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
  }

}
