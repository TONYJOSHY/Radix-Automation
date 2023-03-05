import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alarm-history',
  templateUrl: './alarm-history.component.html',
  styleUrls: ['./alarm-history.component.scss']
})
export class AlarmHistoryComponent implements OnInit {

  displayedColumns = ['alarm', 'on_time', 'off_time', 'ack_time'];
  dataSource = new MatTableDataSource([]);

  alarmHistory = [
    { name: 'I-mark', on_time: '1/02/2023, 3PM', off_time: '1/02/2023, 4PM', ack_time: '1/02/2023, 3PM' },
    { name: 'Position sensor', on_time: '29/01/2023, 1PM', off_time: '29/01/2023, 3PM', ack_time: '29/01/2023, 1PM' },
    { name: 'Over temp', on_time: '25/01/2023, 10AM', off_time: '25/01/2023, 11AM', ack_time: '25/01/2023, 10PM' }
  ]

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.alarmHistory);
  }

}
