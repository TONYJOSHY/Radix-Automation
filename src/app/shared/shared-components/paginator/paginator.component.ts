import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @ViewChild(MatSelect) mySelector: MatSelect;

  openDropdown() {
    this.mySelector.open();
  }

  @ViewChild(MatPaginator) page!: MatPaginator;

  @Input() length: number = 0;
  @Input() pageSize: number = 5;
  @Output() pageChangeEvent = new EventEmitter<any>();
  @Input() offset: number;

  pageSizeOptions: number[] = [5, 10, 20, 50];
  manualPage: any = 0;
  maxPageIndex: number = 0;

  pageBtns: any = [];


  constructor() { }

  ngOnInit(): void {
    this.createBtns();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clearManualPage();
  }

  // Create buttons based on data
  createBtns() {
    let pageIndices: any = [];
    let ceil = Math.ceil(this.length / this.pageSize);
    this.maxPageIndex = ceil - 1;
    let isEllipsisAddedBefore = false;
    let isEllipsisAddedAfter = false;
    let currentIndex = this.manualPage + 1;

    for (let i = 1; i <= ceil; i++) {
      if (i == 1 || i == ceil) {
        pageIndices.push(i);
      } else if (Math.abs(i - currentIndex) >= 2) {
        if (!isEllipsisAddedBefore && i < currentIndex) {
          pageIndices.push('...');
          isEllipsisAddedBefore = true;
        } else if (!isEllipsisAddedAfter && i > currentIndex) {
          pageIndices.push('...');
          isEllipsisAddedAfter = true;
        }
      } else if (Math.abs(i - currentIndex) < 2) {
        pageIndices.push(i);
      }
    }

    this.pageBtns = pageIndices;
  }

  pageChanged() {
    let pageDetails = {
      offset: this.manualPage * this.pageSize,
      limit: this.pageSize
    }
    this.pageChangeEvent.emit(pageDetails);
  }

  pageSizeChange() {
    this.updateManualPage(0);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  public nextManualPage(): void {
    this.manualPage = this.manualPage + 1;
    this.updateManualPage(this.manualPage);
  }

  public prevManualPage(): void {
    this.manualPage = this.manualPage - 1;
    this.updateManualPage(this.manualPage);
  }

  public updateManualPage(index: number): void {
    this.manualPage = index;
    this.createBtns();
    this.pageChanged()
  }

  public clearManualPage(): void {
    this.manualPage = 0;
    this.createBtns();
  }


}
