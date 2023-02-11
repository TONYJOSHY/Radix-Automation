import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  @Input() placeholder: string = 'Search';
  @Output() searchEvent = new EventEmitter();
  focus: Boolean = false;
  isDark = false
  searchTerm = '';
  searchChanged = new Subject<''>();

  constructor() {
    this.searchChanged.pipe(debounceTime(500)).subscribe(() => {
      this.searchEvent.emit(this.searchTerm)
    })
  }

  ngOnInit(): void {
  }

  search() {
    this.searchChanged.next('');
  }
}
