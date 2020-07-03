import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewGDDash } from '../pages/NewGDDash/NewGDDash';
import { GDPage } from '../pages/GD/GD';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { AgendamentosServiceProvider } from '../providers/agendamentos-service/agendamentos-service';
import { IonicStorageModule } from '@ionic/storage';
//import { SuperTabsModule } from 'ionic2-super-tabs';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { AgendamentoDaoProvider } from '../providers/agendamento-dao/agendamento-dao';

import { SessionService } from '../providers/session-service/session-service';
import { MenuPage } from '../pages/menu/menu';
import { AppDiniServiceProvider } from '../providers/app-dini-service/app-dini-service';
import { OneSignal } from '@ionic-native/onesignal';
//import { TabsPage } from '../pages/tabs/tab';
import { HttpService } from '../providers/http-service/http-service';
import { ProjectsService } from '../providers/project-service/project-service';
import { LoginService } from '../providers/login-service/login-service';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewGDDash,
    GDPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'aluracar',
        storeName: 'agendamentos',
        driverOrder: ['indexeddb']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewGDDash,
    GDPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    LoginService,    
    ProjectsService,
    SessionService,
    AgendamentosServiceProvider,
    AgendamentoDaoProvider,
    AppDiniServiceProvider,
    OneSignal
  ]
})
export class AppModule {}
