import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private dataService: DataService) { }

  productionChartData = [
    {
      data_target: [1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300],
      data_actual: [1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250],
      total: 30050,
      increment_value: 5,
      increment: true,
    },
    {
      data_target: [1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300, 1500, 1000, 1500, 1200, 1300],
      data_actual: [1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250, 1450, 1000, 1400, 1200, 1250],
      total: 30050,
      increment_value: 5,
      increment: true,
    }
  ]

  testGet() {
    let url = '/hello/';
    return this.dataService.getData(url)
  }

  testPost(data: any) {
    let url = '/hello/';
    return this.dataService.postData(url, data)
  }

  sendWsData(data) {
    this.dataService.webSocketData(data);
  }

}
