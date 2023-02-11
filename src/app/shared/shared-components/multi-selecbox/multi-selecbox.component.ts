import { MediaMatcher } from '@angular/cdk/layout';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
@Component({
  selector: 'app-multi-selecbox',
  templateUrl: './multi-selecbox.component.html',
  styleUrls: ['./multi-selecbox.component.scss'],
})
export class MultiSelecboxComponent implements OnInit {
  @Input() options: any = [];
  @Input() options2: any = [];
  @Input() selected_options: any = [];
  @Input() label: string = '';
  @Input() nameField: string = 'name';
  @Input() AppendnameField: string = 'name';
  @Input() isBadge: boolean = false;
  @Input() isAppend: boolean = false;
  @Input() isImage: false;
  @Input() type: 1;
  @Output() selectEvent = new EventEmitter<any>();
  @Output() searchEvent = new EventEmitter<any>();

  isOpen = false;
  isAllSelected = false;
  optionList: any = [];
  optionList_2: any = [];
  selectedList: any = [];
  selected3: any = [];
  selectedIds: any = [];
  defaultIds: any = [];
  rolesParams = { offset: 0, limit: 1000, search: '' };
  standardParams = { offset: 0, limit: 1000, search: '' };
  searchList: any = [];
  searchList_2: any = [];
  diffrence: any;
  private _mobileQueryListener: () => void;
  isSmallScreen = false;
  mobileQuery: MediaQueryList;

  constructor(private media: MediaMatcher, changeDetectorRef: ChangeDetectorRef) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    // console.log(this.mobileQuery);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    if (this.mobileQuery.matches) {
      this.isSmallScreen = this.mobileQuery.matches;
    }
  }

  ngOnInit(): void {
    // console.log('options', this.options);
    this.optionList_2 = this.options2;
    this.optionList = this.options;
    this.searchList = this.optionList;
    this.searchList_2 = this.optionList_2;
    // console.log('search', this.searchList);
    if (this.selected_options.length != 0) {
      this.getselectedids();
    }
  }

  getselectedids() {
    if (this.type == 1) {
      this.selected_options.map((e: any) => this.selectedIds.push(e.id));
      this.selected_options.map((e: any) => this.selectedList.push(e));
      let data: any = { selectedIds: this.selectedIds };
      this.selectEvent.emit(data);
    }else if(this.type == 2){
      this.selected_options.map((e: any) => this.selectedIds.push(e));
      this.selected_options.forEach(id => {
        this.options.forEach(element => {
          if(element.id === id){
            this.selectedList.push(element)
          }
        })
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('input changed', changes);
    // this.ngOnInit();
  }

  filter(value: string): any {
    if (value === '') {
      (this.searchList = this.options), (this.searchList_2 = this.options2);
    }
    if (value) {
      const filterValue = value.toLowerCase();
      let searchList = this.optionList.filter((option: any) =>
        option[this.nameField].toLowerCase().includes(filterValue)
      );
      let searchList_2 = this.optionList_2.filter((option: any) =>
        option[this.nameField].toLowerCase().includes(filterValue)
      );
      this.searchList = searchList;
      this.searchList_2 = searchList_2;
    }
  }

  updateAllSelected(item: any, remove: boolean) {
    // console.log(item, remove)
    if (remove) {
      this.removeFromSelected(item);
    } else {
      this.selectItem(item);
    }
  }

  toggleSelectAll() {
    // console.log(this.isAllSelected);
    this.selectedList = [];
    this.selectedIds = [];
    if (this.isAllSelected) {
      this.optionList.forEach((item: any) => {
        this.selectItem(item);
      });
      this.optionList_2.forEach((item: any) => {
        this.selectItem(item);
      });
    }
    this.emitSelectionData();
  }

  selectItem(item: any) {
    this.selectedList.push(item);
    if (item.id) {
      this.selectedIds.push(item.id);
    }
    if (this.selected3.length < 3) {
      this.selected3.push(item);
    }
    if (this.selectedList.length > 3) {
      this.diffrence = this.selectedList.length - 3;
    }
    this.emitSelectionData();
  }

  removeFromSelected(item: any) {
    this.isAllSelected = false;
    let index = this.selectedList
      .map((element: any) => {
        return element.id;
      })
      .indexOf(item.id);
    if (index > -1) {
      this.selectedList.splice(index, 1);
      this.selectedIds.splice(index, 1);
    }
    this.emitSelectionData();
  }

  ClearAll() {
    this.isAllSelected = false;
    this.selectedList = [];
    this.selectedIds = [];
    this.emitSelectionData();
  }

  emitSelectionData() {
    let data: any = {};
    data.selectedIds = this.selectedIds;
    // console.log(data)
    this.selectEvent.emit(data);
  }
}
