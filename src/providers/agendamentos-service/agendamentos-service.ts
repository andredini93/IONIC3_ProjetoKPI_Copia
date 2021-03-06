import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AgendamentosServiceProvider {

  private _url = 'http://192.168.0.6:8080/api';

  constructor(public _http: HttpClient) {    
  }

  agenda(agendamento){
    return this._http
            .post(this._url+'/agendamento/agenda',agendamento)
            .do(()=> agendamento.enviado = true)
            .catch((err) => Observable.of(new Error('Falha')));
  }

}
