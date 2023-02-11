
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { endWith, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss']
})
export class SelectboxComponent implements OnInit {

  @Input() options: any = [];
  @Input() nameField: string = 'name';
  @Input() defaultOptionId: any = '';

  @Output() selectEvent = new EventEmitter<any>();
  @Output() scrollEvent = new EventEmitter<any>();

  myControl = new FormControl();
  filteredOptions!: Observable<any[]>;
  selected: any;
  focus: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.defaultOptionId != '') {
      this.options.forEach((option: any) => {
        if (option.id == this.defaultOptionId) {
          this.selected = option;
        }
      });
    } else {
      this.selected = this.options[0];
    }
    this.filteredOptions = this.myControl.valueChanges
      .pipe( startWith(''),  map(value => this._filter(value) ) );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ngOnInit();
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: any) => option[this.nameField].toLowerCase().includes(filterValue));
  }

  change() {
    this.selectEvent.emit(this.selected);
  }

  clearSearch() {
    this.myControl.patchValue('');
  }

}
