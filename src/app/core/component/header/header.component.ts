import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent, Observable, Subscription, timer } from 'rxjs';
import { DataService } from 'src/app/shared/services/data/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public pushRightClass = 'push-right';
  userData: any;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  isSidenavHide = false;
  @Output() toggleSideBar = new EventEmitter();

  constructor(
    public router: Router,
    private _dataService: DataService
  ) {
    if (window.innerWidth <= 992) {
      this.removeSidebar();
    }
    this.router.events.subscribe((val) => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.removeSidebar();
      }
    });
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((evt: any) => {
      if (evt.target.innerWidth <= 992) {
        if (!this.isToggled()) {
          this.removeSidebar();
        }
      } else {
        this.addSidebar();
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }


  // Function to toggle side bar
  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
    this.isSidenavHide = !this.isSidenavHide;
    if (window.innerWidth > 992) {
      this.toggle();
    }
  }

  toggle(){
    this.toggleSideBar.emit(this.isSidenavHide)
  }

  addSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.remove(this.pushRightClass);
  }

  removeSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.add(this.pushRightClass);
  }

  logout() {
    // this._dataService.logout().subscribe((res: any) => {
    //   if (res.code == 200) {
    //     sessionStorage.removeItem('EBCReturnUrl');
    //     sessionStorage.removeItem("selectedSideTab");
    //     sessionStorage.removeItem("newFields");
    //     sessionStorage.removeItem("updatedFields");
    //     sessionStorage.removeItem('optionList');
    //     sessionStorage.removeItem('deleteList');
    //     sessionStorage.removeItem('isSequencing');
    //     sessionStorage.removeItem('systemName');
    //     sessionStorage.removeItem('selectedLanguage');
    //     localStorage.removeItem('isEBCUserLoggedin');
    //     localStorage.removeItem('EBCUserData');
    //     this.loginWithUrl(res.data);
    //   }
    // })
  }

}
