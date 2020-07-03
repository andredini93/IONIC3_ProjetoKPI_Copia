import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { Carro } from '../../Modelos/Carro';
import { NavLifecycles } from '../../Utils/ionic/nav/nav-lifecycles';
import { EscolhaPage } from '../escolha/escolha';
import { GDPage } from '../GD/GD';
import { SessionService } from '../../providers/session-service/session-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecycles {
  
  project: any;
	scrollableTabsopts: any = {};
	dashboardPage: any = GDPage;

	tabsColor: string = "default";
	tabsMode: string = "md";
	tabsPlacement: string = "top";

	tabs: any[] = [];
	config = {
		dragThreshold: 40,
		maxDragAngle: 15
	}

	private _rateTimer;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _sessionService: SessionService ) {
                this.tabs = this._sessionService.infoDash;
                
  }


  
  ionViewDidLoad(){
  }
}
