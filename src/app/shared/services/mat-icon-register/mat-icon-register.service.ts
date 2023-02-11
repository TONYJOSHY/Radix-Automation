import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class MatIconRegisterService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }
path='assets/images/icons'
RegisterIcon(){
  this.matIconRegistry.addSvgIcon( "down",this.setpath(this.path+"/down-icon.svg"));
  this.matIconRegistry.addSvgIcon( "sequence",this.setpath(this.path+"/sequence-btn.svg"));
  this.matIconRegistry.addSvgIcon( "edit",this.setpath(this.path+"/edit-btn.svg"));
  this.matIconRegistry.addSvgIcon( "info",this.setpath(this.path+"/info-btn.svg"));
  this.matIconRegistry.addSvgIcon( "delete",this.setpath(this.path+"/delete-btn.svg"));
  this.matIconRegistry.addSvgIcon( "editclose",this.setpath(this.path+"/edit-close.svg"));
  this.matIconRegistry.addSvgIcon( "options",this.setpath(this.path+"/options.svg"));
}
setpath(url){
  return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
}

}
