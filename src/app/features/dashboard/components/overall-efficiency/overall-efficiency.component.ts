import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-overall-efficiency',
  templateUrl: './overall-efficiency.component.html',
  styleUrls: ['./overall-efficiency.component.scss']
})
export class OverallEfficiencyComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Production', 'Energy', 'Manhours' ];
  public doughnutChartData = [
    {
      data: [ 30, 20, 40 ],
      backgroundColor: [ '#0f48aa', '#6FCF97', '#FFA3A3' ],
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
    // spacing: 0,
    // hoverOffset: 20,
    // borderJoinStyle: '',
    // layout: {
    //   padding: { bottom: 20 }
    // },
    legend: {
      display: true,
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
      displayColors: false,
      backgroundColor: '#060606',
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function(tooltipItem, data) {
          return data['datasets'][0]['data'][tooltipItem['index']] + ' %';
        },
      },
    },
    // datalabels: {
    //   anchor: 'end',
    //   align: 'end'
    // },
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


  constructor() { }

  ngOnInit(): void {
  }

}
