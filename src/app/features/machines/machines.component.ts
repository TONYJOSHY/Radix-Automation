import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/services/utility/utility.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {

  calenderFilter = [
    { id: '', name: 'All dates' },
    { id: '1', name: 'Today' },
    { id: '2', name: 'Last day' },
    { id: '3', name: 'This week' },
    { id: '4', name: 'This month' },
    { id: '5', name: 'This year' }
  ]


  constructor(public utilityService: UtilityService) { }

  ngOnInit(): void {
  }
  emitValue(item) { }

}
