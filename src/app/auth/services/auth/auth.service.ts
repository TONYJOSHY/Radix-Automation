import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   $baseUrl = environment.baseUrl;

   constructor(private http: HttpClient, private router: Router) { }

}
