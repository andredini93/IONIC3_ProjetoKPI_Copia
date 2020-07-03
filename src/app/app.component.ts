import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//LOCAL
import { LoginService } from '../providers/login-service/login-service';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';
import { OneSignal } from '@ionic-native/onesignal';
//import { TabsPage } from '../pages/tabs/tab';
import { ProjectsService } from '../providers/project-service/project-service';
import { SessionService } from '../providers/session-service/session-service';
import { NewGDDash } from '../pages/NewGDDash/NewGDDash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  
  rootPage: any; 

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private _onesignal: OneSignal,
              private _loginService: LoginService,
              public _sessionService: SessionService,
              private _projectService: ProjectsService,
              private _agendamentoDAO: AgendamentoDaoProvider) {
    this.initializeApp()
    
  }
  ngOnInit(): void {
    this.populaTab();
    this.rootPage = NewGDDash;
  }  

  async populaTab(){
    await this._loginService.doLogin();
    await this._projectService.getProjects();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      
      /*
      //configurando o onesignal
      let iosConfigs = {
        kOSSettingsKeyAutoPrompt: true,
        kOSSetiingsKeyInAppLaunchURL: false
      }

      
      this._onesignal.startInit('94f556e2-186e-41cf-b6dd-864dfb40ea43','662153221708');

      this._onesignal.inFocusDisplaying(this._onesignal.OSInFocusDisplayOption.Notification);

      this._onesignal.handleNotificationReceived()
        .subscribe(
          (notificacao: OSNotification) => {
            let dadosAdicionais = notificacao.payload.additionalData
            let agendamentoID = dadosAdicionais['agendamento-id'];

            this._agendamentoDAO.recupera(agendamentoID)
              .subscribe(
                (agendamento: Agendamento) => {
                  agendamento.confirmado = true;

                  this._agendamentoDAO.salva(agendamento);
                }
              )           
          }
        )

      this._onesignal.endInit();
    
          */
    });
  }

}
