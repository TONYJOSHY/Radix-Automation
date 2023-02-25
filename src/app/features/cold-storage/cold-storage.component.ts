import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

@Component({
  selector: 'app-cold-storage',
  templateUrl: './cold-storage.component.html',
  styleUrls: ['./cold-storage.component.scss']
})
export class ColdStorageComponent implements OnInit {

  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
  }

}
