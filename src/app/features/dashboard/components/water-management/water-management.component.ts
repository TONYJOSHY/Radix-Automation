import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-water-management',
  templateUrl: './water-management.component.html',
  styleUrls: ['./water-management.component.scss']
})
export class WaterManagementComponent implements OnInit {

  public lineChartOptions = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    // layout: {
    //   padding: { bottom: 20 }
    // },
    elements: {
      line: {
        tension: 0.5
      }
    },
    legend: {
      display: true,
      position: 'top',
      align: 'start',
      labels: {
        fontSize: 14,
        boxWidth: 15,
        boxHeight: 15,
      },
    },
    datalabels: {
      anchor: 'center',
      align: 'center'
    },
    scales: {
      xAxes: [{
        gridLines: {
          zeroLineColor: '#FFFFFF'
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          zeroLineColor: '#FFFFFF'
        },
        ticks: {
            beginAtZero: true,
            // max: 100,
            // min: 0
        },
      }]
    },
    tooltips: {
      displayColors: false,
      backgroundColor: '#060606',

      // padding: 50,
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function(tooltipItem, data) {
          return Math.round( data['datasets'][0]['data'][tooltipItem['index']] ) + ' %' ;
        },
      },
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          scaleID: 'x',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            display: true,
            position: 'center',
            color: 'orange',
            content: 'LineAnno',
            font: {
              weight: 'bold'
            }
          }
        },
      ],
    }
  };

  public lineChartType: ChartType = 'line';
  public lineChartLabel: Label[] = [ '1', '2', '3', '4', '5', '6' ]

  public lineChartData: ChartDataSets[]  = [
    {
      data: [ 10, 20, 15, 10, 25, 20 ],
      label: 'Water consumption',
      backgroundColor: '#0f48aa',
      borderColor: '#0f48aa',
      pointBackgroundColor: '#0f48aa',
      pointBorderColor: '#0f48aa',
      pointHoverBackgroundColor: '#0f48aa',
      pointHoverBorderColor: '#0f48aa',
      fill: false,
    },
    {
      data: [ 5, 10, 12, 8, 7, 5 ],
      label: 'Treated Water',
      backgroundColor: '#4aa564',
      borderColor: '#4aa564',
      pointBackgroundColor: '#4aa564',
      pointBorderColor: '#4aa564',
      pointHoverBackgroundColor: '#4aa564',
      pointHoverBorderColor: '#4aa564',
      fill: false,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
