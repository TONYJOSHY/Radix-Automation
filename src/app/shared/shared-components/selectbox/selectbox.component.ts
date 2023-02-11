
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Observable, Subscription } from 'rxjs';
import { endWith, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss']
})
export class SelectboxComponent implements OnInit {

  @Input() isSelected:false
  @Input() options: any = [];
  @Input() nameField: string = 'name';
  @Input() defaultOptionId: any = '';
  @Input() placeholder: any = '';
  @Input() label: string = '';
  @Input() hideSearch: boolean = false;
  @Input() hideBodyArrow: boolean = false;
  @Input() applyPlaceholderStyle: boolean = true;
  @Input() isSmall: boolean = false;
  @Input() hidetooltip:boolean=true
  @Input() isShadowborder:boolean=false
  @Input() type:number=1
  @Output() selectEvent = new EventEmitter<any>();
  @Output() scrollEvent = new EventEmitter<any>();

  myControl = new FormControl();

  filteredOptions!: Observable<any[]>;

  @ViewChild(MatSelect)
  select!: MatSelect;

  selected: any;
  hasLabel: boolean = false;
  focus: boolean = false;
  clickEventsubscription:Subscription
    
  constructor() { 
    
  }

  ngAfterViewInit() {
    if (!this.hideBodyArrow) {
      this.select._positions = [
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' }
      ];
    }
  }

  ngOnInit() {

    // this.nameCheck();

    // console.log(this.options);
    if (this.label != '') {
      this.hasLabel = true;
    }
    if (this.defaultOptionId != '') {
      this.options.forEach((option: any) => {
        if (option.id == this.defaultOptionId) {
          this.selected = option;
        }
      });
    } else {
      if(this.placeholder==''){
         this.selected=this.options[0]
      }
      else{
        this.selected = ''
      }
      
    }
    this.filteredOptions = this.myControl.valueChanges
      // .pipe( map( val => val.trim() ) )
      .pipe(
        startWith(''),
        map(value => this._filter(value) )
      );
      // this.myControl.valueChanges.subscribe( (data: any) => console.log(data) )
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('input changed');
    this.ngOnInit();
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    // console.log(this.options.filter((option: { name: string; }) => option.name.toLowerCase().includes(filterValue)));
    // return this.options.filter((option: { name: string; }) => option.name.toLowerCase().includes(filterValue));
    return this.options.filter((option: any) => option[this.nameField].toLowerCase().includes(filterValue));
  }

  change() {
    this.selectEvent.emit(this.selected);
  }

  clearSearch() {
    this.myControl.patchValue('');
  }

  getNextBatch() {
    // const result = this.data.slice(this.offset, this.offset + this.limit);
    // this.options.next(result);
    // this.offset += this.limit;

    console.log('getNextBatch()');
    let scrolldata = {
      offset: 0,
      limit: 1,
      load: true
    }
    this.scrollEvent.emit(scrolldata);
  }
 Clear(){
   this.selected=''
 }

}
