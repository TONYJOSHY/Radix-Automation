import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-label-field',
  templateUrl: './label-field.component.html',
  styleUrls: ['./label-field.component.scss']
})
export class LabelFieldComponent implements OnInit {
  @Input() status
  @Input() label: string = '';
  @Input() field: any;
  @Input() type: number = 0;
  @Input() hasAddSign: boolean = false; 
  @Input() status_type:string
  @Input() isbold=true
  @Input() count=2
  @Output() generateNewCoOrdinator = new EventEmitter<boolean>();
  @Output() allowEdit = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log("j",this.status);
    
   }

  addSignClicked(){
    this.generateNewCoOrdinator.emit(true);
  }

  openEdit(){
    this.allowEdit.emit(true);
  }

  tooltipTrigger(tooltip: MatTooltip){
    tooltip.show()
    setTimeout( () => tooltip.hide() , 2000 )
    tooltip.position = 'above';
  }

  tooltipTrigger2(tooltip: MatTooltip){
    tooltip.show()
    setTimeout( () => tooltip.hide() , 2000 )
    tooltip.position = 'above';      
  }

}
