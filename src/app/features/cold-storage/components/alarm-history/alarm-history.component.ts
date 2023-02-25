import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-history',
  templateUrl: './alarm-history.component.html',
  styleUrls: ['./alarm-history.component.scss']
})
export class AlarmHistoryComponent implements OnInit {

  displayedColumns = ['alarm', 'on_time', 'off_time', 'ack_time'];
  dataSource = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
