import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

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
    elements: {
      line: {
        tension: 0
      }
    },
    legend: {
      display: true,
      position: 'top',
      align: 'start',
      labels: {
        fontSize: 14,
        boxWidth: 15,
        boxHeight: 15
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
      label: 'Energy Consumed',
      backgroundColor: '#e31c3d',
      borderColor: '#e31c3d',
      pointBackgroundColor: '#e31c3d',
      pointBorderColor: '#e31c3d',
      pointHoverBackgroundColor: '#e31c3d',
      pointHoverBorderColor: '#e31c3d',
      fill: false,
    },
    {
      data: [ 5, 7, 10, 4, 15, 10 ],
      label: 'Solar Production',
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
