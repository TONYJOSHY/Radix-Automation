import { Component, OnInit } from '@angular/core';
import { DashboardService } from './service/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  message = '';

  calenderFilter = [
    { id: '', name: 'All dates' },
    { id: '1', name: 'Today' },
    { id: '2', name: 'Last day' },
    { id: '3', name: 'This week' },
    { id: '4', name: 'This month' },
    { id: '5', name: 'This year' }
  ]

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void { }

}
