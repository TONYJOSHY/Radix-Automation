import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { AuthService } from '../services/auth/auth.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

   code = null;
   state = null;

   constructor(
      public _authService: AuthService,
      public router: Router,
      private routes: ActivatedRoute,
      private spinner: NgxSpinnerService
   ) {
      // console.log(routes.snapshot.data['showComponents']);
   }

   ngOnInit(): void {
      this.spinner.show();
      this.router.navigate(['/home']);
   }

}
