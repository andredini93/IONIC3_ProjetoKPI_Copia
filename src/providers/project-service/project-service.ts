import { Injectable } from "@angular/core";
import { HttpService } from "../http-service/http-service";
import { SessionService } from "../session-service/session-service";

@Injectable()
export class ProjectsService {
    constructor(
        private _httpService: HttpService,
        private _session: SessionService,
    ) { }

    getProjects() {
        this._httpService.get(this._session.SERVER + 'md/p25mdfc7x86riaqqzxjpqjezzpktqs5r/query/analyticaldashboard', {})
          .subscribe(res => {          
            res.query.entries.forEach(element => { 
              let arrayTemp = {
                nomeDash: element.title,
                IdDash: element.identifier
              };
              this._session.infoDash.push(arrayTemp)
            });
            }
          );
      }
}