import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

@Component({
  selector: 'app-machine2',
  templateUrl: './machine2.component.html',
  styleUrls: ['./machine2.component.scss']
})
export class Machine2Component implements OnInit {

  public doughnutChartLabels: string[] = ['Efficiency'];
  public doughnutChartData = [
    {
      data: [25, 75],
      backgroundColor: [
        this.utilityService.cssVariables.danger || '#f59200',
        this.utilityService.cssVariables['font-color'] || '#f59200',
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
    legend: { display: false },
    tooltips: { enabled: false },
  };

  constructor(public utilityService: UtilityService,
    private router: Router) { }

  ngOnInit(): void {
  }

  machinesRoute() {
    this.router.navigate(['/machines']);
  }

}
