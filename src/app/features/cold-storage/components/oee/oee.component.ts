import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

@Component({
  selector: 'app-oee',
  templateUrl: './oee.component.html',
  styleUrls: ['./oee.component.scss']
})
export class OeeComponent implements OnInit {

  public doughnutChartDataOEE = [
    {
      data: [65, 35],
      backgroundColor: [
        this.utilityService.cssVariables.secondary || '#0f48aa',
        this.utilityService.cssVariables['font-color-3'] || '#f59200',
      ],
    }
  ];

  public doughnutChartDataPerformance = [
    {
      data: [50, 50],
      backgroundColor: [
        this.utilityService.cssVariables.warning || '#0f48aa',
        this.utilityService.cssVariables['font-color-3'] || '#f59200',
      ],
    }
  ]

  public doughnutChartDataAvalability = [
    {
      data: [45, 55],
      backgroundColor: [
        this.utilityService.cssVariables.danger || '#0f48aa',
        this.utilityService.cssVariables['font-color-3'] || '#f59200',
      ],
    }
  ]

  public doughnutChartDataQuality = [
    {
      data: [85, 15],
      backgroundColor: [
        this.utilityService.cssVariables.success || '#0f48aa',
        this.utilityService.cssVariables['font-color-3'] || '#f59200',
      ],
    }
  ]

  public doughnutChartType: ChartType = 'doughnut';

  public chartOptions = {
    elements: { arc: { borderWidth: 0 } },
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    cutoutPercentage: 60,
    circumference: 1 * Math.PI,
    legend: { display: false },
    tooltips: { enabled: false },
    rotation: 1 * Math.PI,
  };

  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
  }

}
