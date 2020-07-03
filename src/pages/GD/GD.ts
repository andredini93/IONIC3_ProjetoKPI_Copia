import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'GD-cont',
  templateUrl: 'GD.html'
})
export class GDPage {

  private _titulo: string = '';
  private _URI: any; 

  constructor(public navParams: NavParams,
    private _sanitizer: DomSanitizer){ 
      console.log(this.navParams.get('IdDash'));
      console.log(this.navParams);
      this._URI = this._sanitizer.bypassSecurityTrustResourceUrl('https://analytics.totvs.com.br/dashboards/embedded/#/project/p25mdfc7x86riaqqzxjpqjezzpktqs5r/dashboard/'+this.navParams.get('IdDash')+'?showNavigation=true');
  }
}
