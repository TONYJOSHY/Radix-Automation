import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private dataService: DataService) { }

  testGet(){
    let url = '/hello/';
    return this.dataService.getData(url)
  }

  testPost(data:any){
    let url = '/hello/';
    return this.dataService.postData(url, data)
  }

  sendWsData(data){
    this.dataService.webSocketData(data);
  }

  receiveWsData(){
    this.dataService.getWebSocketData().subscribe( (val) => console.log(val) );
  }

}
