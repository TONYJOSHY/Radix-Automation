import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  showLoader:boolean=false;
  loaderStatus: Subscription = new Subscription();

  constructor(
    public loaderService: LoaderService,
  ) {
   }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.loaderStatus = this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
      // this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if(this.loaderStatus) {
      this.loaderStatus.unsubscribe();
    }
  }

}
