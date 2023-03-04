import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';
import { DashboardService } from '../../service/dashboard-service.service';

@Component({
  selector: 'app-overall-efficiency',
  templateUrl: './overall-efficiency.component.html',
  styleUrls: ['./overall-efficiency.component.scss']
})
export class OverallEfficiencyComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Production', 'Energy', 'Manhours'];
  public doughnutChartData = [
    {
      data: [],
      backgroundColor: [
        this.utilityService.cssVariables.primary || '#0f48aa',
        this.utilityService.cssVariables.warning || '#f59200',
        this.utilityService.cssVariables.success || '#4aa564',
        // this.utilityService.cssVariables.cancelled || '#f87979'
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
    circumference: 2 * Math.PI,
    legend: {
      display: true,
      position: 'bottom',
      align: 'center',
      labels: {
        fontSize: 14,
        boxWidth: 15,
        boxHeight: 15,
        // padding: 16
      },
    },
    tooltips: {
      displayColors: false,
      backgroundColor: this.utilityService.cssVariables['gray-3'] || '#060606',
      callbacks: {
        title: function (tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function (tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' %';
        },
      },
    },
  };

  public doughnutChartPlugins = [{
    afterLayout: function (chart) {
      chart.legend.legendItems.forEach(
        (label) => {
          let value = chart.data.datasets[0].data[label.index];
          label.text += ': ' + value + '%';
          return label;
        }
      )
    },
  }];

  overAllEfficiencyData: any;

  constructor(public utilityService: UtilityService,
    private dashBoardService: DashboardService) { }

  ngOnInit(): void {
    this.overAllEfficiencyData = this.dashBoardService.overAllEfficiency[0];
    this.doughnutChartData[0].data = this.overAllEfficiencyData.efficiency;
    this.chartOptions.circumference = 2 * Math.PI * (this.overAllEfficiencyData.total / 100);
  }

}
