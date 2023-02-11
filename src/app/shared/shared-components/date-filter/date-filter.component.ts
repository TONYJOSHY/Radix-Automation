import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit {

  @Input() date='';
  @Input() placeholder:string = '';
  @Output() dateEvent = new EventEmitter<any>();

  constructor(
    public datepipe: DatePipe,
    private dateAdapter: DateAdapter<Date>
    ) {
    this.dateAdapter.setLocale('en-GB');
  }

  ngOnInit(): void {
  }

  dateChange(data) {
    let sharedDate = this.datepipe.transform(new Date(data), 'yyyy-MM-dd');
    this.dateEvent.emit(sharedDate);
  }

  clearDate(){
    this.date = ''
    this.dateEvent.emit(this.date);
  }

}
