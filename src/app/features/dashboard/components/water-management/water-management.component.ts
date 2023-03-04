import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

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
      position: 'bottom',
      align: 'start',
      labels: {
        fontSize: 14,
        boxWidth: 15,
        boxHeight: 15,
      },
    },
    // datalabels: {
    //   anchor: 'center',
    //   align: 'center'
    // },
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
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return Math.round(data['datasets'][0]['data'][tooltipItem['index']]);
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
  public lineChartLabel: Label[] = ['0', '4', '8', '12', '16', '20'];

  public lineChartData: ChartDataSets[] = [
    {
      data: [500, 510, 200, 400, 500, 490],
      label: 'Water consumption',
      backgroundColor: this.utilityService.cssVariables.info || '#0f48aa',
      borderColor: this.utilityService.cssVariables.info || '#0f48aa',
      pointBackgroundColor: this.utilityService.cssVariables.info || '#0f48aa',
      pointBorderColor: this.utilityService.cssVariables.info || '#0f48aa',
      pointHoverBackgroundColor: this.utilityService.cssVariables.info || '#0f48aa',
      pointHoverBorderColor: this.utilityService.cssVariables.info || '#0f48aa',
      fill: false,
    },
    {
      data: [200, 200, 190, 200, 210, 200],
      label: 'Treated Water',
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
