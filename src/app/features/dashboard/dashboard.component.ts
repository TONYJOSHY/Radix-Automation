import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  message = '';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void { }

  emitValue(item){

  }

}
