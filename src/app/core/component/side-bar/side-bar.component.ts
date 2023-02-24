import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {

  @Input() isExpand = true;
  userData;
  selectedLanguage: any = 'EN-GB';
  languageList: any = [
    { name: 'English', code: 'EN-GB' },
    { name: "German", code: "DE-CH" }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void { }

  ngOnChanges() { }



}
