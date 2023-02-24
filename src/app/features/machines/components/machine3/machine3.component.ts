import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

@Component({
  selector: 'app-machine3',
  templateUrl: './machine3.component.html',
  styleUrls: ['./machine3.component.scss']
})
export class Machine3Component implements OnInit {

  public doughnutChartLabels: string[] = ['Efficiency'];
  public doughnutChartData = [
    {
      data: [80, 20],
      backgroundColor: [
        this.utilityService.cssVariables.success || '#4aa564',
        this.utilityService.cssVariables['font-color'] || '#f59200',
      ],
    }
  ]
  public doughnutChartType: ChartType = 'doughnut';

  public chartOptions = {
    elements: {
      arc: { borderWidth: 0 }
    },
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    cutoutPercentage: 60,
    circumference: 2 * Math.PI,
    // spacing: 0,
    // hoverOffset: 20,
    // borderJoinStyle: '',
    // layout: {
    //   padding: { bottom: 20 }
    // },
    legend: {
      display: false,
      position: 'top',
      align: 'start',
      labels: {
        fontSize: 14,
        boxWidth: 15,
        boxHeight: 15,
        // padding: 16
      },
    },
    tooltips: {
      display: false,
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
    // beforeInit: function (chart) {
    //   chart.legend.afterFit = function(){
    //     this.height = this.height + 30;
    //   }
    // }
  }];


  constructor(public utilityService: UtilityService,
    private router: Router) { }

  ngOnInit(): void {
  }

  machinesRoute() {
    this.router.navigate(['/machines']);
  }

}
