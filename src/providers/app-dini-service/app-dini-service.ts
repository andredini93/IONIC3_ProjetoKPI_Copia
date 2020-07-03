import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carro } from '../../Modelos/Carro';


@Injectable()
export class AppDiniServiceProvider {

  constructor(private _http: HttpClient) {
              }

  
   lista(){
    return this._http.get<Carro[]>('http://192.168.0.6:8080/api/carro/listatodos')
  }
}
