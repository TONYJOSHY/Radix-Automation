import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegisterService } from './shared/services/mat-icon-register/mat-icon-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-master';

  constructor(private iconregister: MatIconRegisterService) {
    iconregister.RegisterIcon();
  }
}
