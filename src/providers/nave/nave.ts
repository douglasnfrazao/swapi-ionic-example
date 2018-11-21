import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { baseUrl } from '../../constants';

/*
  Generated class for the NaveProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NaveProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NaveProvider Provider');
  }

  getNaves() : Observable<any> {
    return this.http.get(`${baseUrl}starships`)
  }

  getPilot(url: string) {
    return this.http.get(url)
  }

}
