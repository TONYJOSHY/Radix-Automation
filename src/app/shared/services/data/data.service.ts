import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/core/component/snack-bar/snack-bar.component';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
   providedIn: 'root',
})
export class DataService {

   $baseUrl = environment.baseUrl;
   ws = webSocket( environment.wsBaseUrl );

   constructor(
      private http: HttpClient,
      private snackBar: MatSnackBar
   ) { }

   // Method to toast success/error messages (custom)
   customSnackBar(message: string, type: string, panel: string) {
      this.snackBar.openFromComponent(SnackBarComponent, {
          data: {
              message: message,
              type: type,
          },
          duration: 3000,
          horizontalPosition: 'center',
          panelClass: panel
      });
  }

   // primary methods
   getData(url: any, params?) {
      let baseUrl = this.$baseUrl + url;
      if(params) return this.http.get(baseUrl, this.Options2(params));
      return this.http.get(baseUrl, this.Options());
   }

   postData(url: any, data: any) {
      let baseUrl = this.$baseUrl + url;
      return this.http.post(baseUrl, data, this.Options());
   }

   patchData(url: any, data: any) {
      let baseUrl = this.$baseUrl + url;
      return this.http.patch(baseUrl, data, this.Options());
   }

   deleteData(url: any) {
      let baseUrl = this.$baseUrl + url;
      return this.http.delete(baseUrl, this.Options());
   }

   // web socket
   webSocketData(data: any){
      this.ws.subscribe();
      this.ws.next(data);
      this.ws.complete();
   }

   getWebSocketData(){
    return this.ws
  }



   // httpOptions
   Options() {
      // const data = JSON.parse(localStorage.getItem('CBUserData'));
      const httpOptions = {
         headers: new HttpHeaders({
            'Content-Type': 'application/json',
            // Bearer: data.token,
            // 'user-id': data.id,
            // 'cb-id': data.cb.id,
            language: 'en',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
         }),
      };
      return httpOptions;
   }

   Options2(params) {
      // const data = JSON.parse(localStorage.getItem('CBUserData'));
      // let userId = data.id.toString();
      const httpOptions = {
         headers: new HttpHeaders({
            'Content-Type': 'application/json',
            // Bearer: data.token,
            // 'user-id': userId,
            // 'cb-id': data.cb.id,
            language: 'en',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
         }),
         params: new HttpParams({ fromObject: params }),
      };
      return httpOptions;
   }

}
