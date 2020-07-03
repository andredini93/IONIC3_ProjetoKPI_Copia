import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { LoginService } from '../../providers/login-service/login-service';
import { SessionService } from '../../providers/session-service/session-service';
import { HomePage } from '../home/home';
import { GDPage } from '../GD/GD';
import { TabsPage } from '../tabs/tab';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{title: string, component: any, params: any }>; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _loginService: LoginService,
              public _sessionService: SessionService) {
                this.rootPage = TabsPage;
  }

  ionViewDidLoad() {
  }

  async configMenu(){

    this.pages = [
      { title: 'Home', component: HomePage, params: {} },
      { title: 'KPI_COMERCIAL_AN', component: GDPage, params: { _titulo: 'KPI_COMERCIAL_AN', _URI: 'acdEGyKLd34D'} },
      { title: 'KPI - Outro Teste', component: GDPage, params: {_titulo: 'KPI - Outro Teste', _URI: 'aenEsRP8aBL8'} }
    ];
    

    /*
    console.log('Tamanho do ArrayDashKPI ' + ArrayDashKPI.infoDash.length);
    ArrayDashKPI.infoDash.forEach(element => {
      let arrayTemp = {
        title: element.nomeDash,
        component: GDPage,
        params: { _titulo: element.nomeDash, _URI: element.IdDash }
      };
      this.pages.push(arrayTemp)
    });
    */   
   
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component,page.params);
  }

}
