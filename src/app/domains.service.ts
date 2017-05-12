import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Domain } from './domain';

@Injectable()
export class DomainsService {
  //TODO: please update your token here - temprarily using hard coded token for demo purpouse
  token:string ="eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3RzaS5lYmkuYWMudWsiLCJleHAiOjE0OTQ2MDA3OTgsImp0aSI6IkQyZm9nZ05YT21keVRrX1UteUdtOGciLCJpYXQiOjE0OTQ1NjgzOTgsInN1YiI6InVzci1kNTk2ZDYwOC01NDY0LTQwNTItODdlOC02OTBkYTdhMzJkNmEiLCJlbWFpbCI6InVrdW1iaGFtQGViaS5hYy51ayIsIm5pY2tuYW1lIjoiMTNkNzBiZTYwZTFhZmFiZmEzYjA5Y2I4NGRhMGNmNzY2NzBlMWNhMiIsIm5hbWUiOiJVcGVuZHJhIEt1bWJoYW0iLCJkb21haW5zIjpbXX0.MC3ZAJVIHX0wDjUtmHfVvDrTYMeFhmK8gDMqoZmTzKjwCa6Tw14s32eaGTP_xLrovuXIs6E860uS56sa3QSqR1Yp32JAqRxBiJV1-bDGEjLIzf1j1U1rrYzOWld1adcx18u3l56fOyaEXaUvmHBkT5vKxHZYfTJkut4bvsd6aDZaK_qc6n_YQjR-Fbbu5QwmxSDpyJ7eW8vkfPRKHcnoFU7ib7EOXJqx6swdAL65-GrP0oMf8pRelQZ3O9WQ9ZhPw-95ox4bNphwqxzfuzHgsDdgSs1fdCn6zXFc4xgTBzMWaKyezVYwWVIqhbsfkvPJUuZKEoq7iRANyjvsnZoBOA"
  constructor(public http: Http) { }

  /**
   * get all the domains from the API- contact API  @Code getAllDomains()- end point
   */
  getAll() {
    console.info('[DomainService] - In the getAll function');
    console.trace("server address: " + 'https://explore.api.aap.tsi.ebi.ac.uk/');
    let _url = 'https://explore.api.aap.tsi.ebi.ac.uk/'+'domains/';
    console.trace("url: " + _url);
    //sending request to the server and capturing response/error from the server
    return this.http.get(_url,
      {
        headers: this.addheaders()
      }
    ).map((response: Response) => <Domain>response.json())
      .catch(this._errorHandler);
  }


  /**
   * this function will excecute whenever server respose throws error
   * @param error - this error contains- error message,url and error code.
   */
  _errorHandler(error: Response) {
    console.error("In  _errorHandler- http error code: " + error.status);
    return Observable.throw(error.status);
  }

  /**
   * Generate HTTP header using HTTP basic Auth
   */
  public addheaders() {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer '+this.token);
    headers.append('Accept', 'application/hal+json');
    return headers;
  }

}
