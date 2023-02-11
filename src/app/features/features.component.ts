import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {

  showComponents = true;
  className= 'large-sidenav';
  isExpanded = true;

  constructor() {}

  ngOnInit() {}

  sideToggle(data){
    this.isExpanded = !data;
    if(data){
      this.className = 'small-sidenav'
    }else{
      this.className = 'large-sidenav'
    }
  }
}
