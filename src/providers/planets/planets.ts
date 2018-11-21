import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { baseUrl } from '../../constants';

/*
  Generated class for the PlanetsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanetsProvider {

  constructor(public http: HttpClient) {
  }

  getPlanets() : Observable<any> {
    return this.http.get(`${baseUrl}planets`)
  }

}
