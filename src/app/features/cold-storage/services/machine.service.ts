import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private dataService: DataService) { }

  getSettings() {
    let url = '/dataread'
    return this.dataService.getData(url)
  }

  postSettings(data) {
    let url = '/dataread'
    return this.dataService.postData(url, data)
  }

  customMessage(message, type) {
    this.dataService.customSnackBar(message, type)
  }
}
