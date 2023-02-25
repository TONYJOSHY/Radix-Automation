import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'chart.js';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

@Component({
  selector: 'app-machine1',
  templateUrl: './machine1.component.html',
  styleUrls: ['./machine1.component.scss']
})
export class Machine1Component implements OnInit {

  public doughnutChartLabels: string[] = ['Efficiency'];
  public doughnutChartData = [
    {
      data: [65, 35],
      backgroundColor: [
        this.utilityService.cssVariables.primary || '#0f48aa',
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
