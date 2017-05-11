import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  authenticate(userName: string, password: string): Observable<string> {
    console.log('[AuthService] Getting jwt token for user ' + userName);
    return this.http.get(
      'https://explore.api.aap.tsi.ebi.ac.uk/auth',
      {
        headers: this.getHeaders(userName, password)
      }
    )
      .map((res: Response) => {
        if (res) {
          if (res.status === 200) {
            console.log("res status: " + res.status);
            return res.text();
          }
        }
      })
      .catch((error: any) => {
        if (error.status >= 400 || error.status <= 500) {
          console.log("error.status:" + error.status);
          return Observable.throw(new Error(error.status));
        }
      });
  }
  /**
   * create headers
   */
  getHeaders(userName: string, password: string): Headers {
    let headers = new Headers();
    headers.append('Authorization', 'Basic '
      + btoa(userName + ':' + password));
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
