import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Platform, LoadingController } from "ionic-angular";
import 'rxjs/add/operator/toPromise';

import { SessionService } from "../session-service/session-service";
import { ProjectsService } from "../project-service/project-service";


@Injectable()
export class LoginService{



    constructor(private _http: HttpClient,
                private _sessionService: SessionService,
                private _projectService: ProjectsService,
                private _loadingCtrl: LoadingController){

    }

    doLogin(){
        let loading = this._loadingCtrl.create({
            spinner: 'dots',
            content: 'Fazendo login...'
        });
      
        loading.present();

        this._sessionService.setUserAgentServer();
        let payload = {
          postUserLogin: {
              login: 'andre.dini@totvs.com.br',
              password: 'totvs123',
              remember: 1,
              verify_level: 2
          }
        };
        let URL: string = this._sessionService.SERVER + 'account/login';
        return this._http.post(URL, payload, { observe: 'response' })
            .toPromise().then((res: any) => {
                this._sessionService.ID_PROFILE = res.body.userLogin.profile
                    .replace('/gdc/account/profile/', '');
                this._sessionService.TOKEN_SST = res.headers.get('X-GDC-AuthSST');
                this._sessionService.TOKEN_TT = res.headers.get('X-GDC-AuthTT');
                loading.dismiss();
            }).catch((err) => alert(err.message));
    }
}