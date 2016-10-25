import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MenuItem } from './menu-item'

@Injectable()
export class MenuService {

  private menuUrl = 'app/menuItems';

  constructor(private http: Http) { }

  getMenu(menuName: string): Promise<MenuItem[]> {

    console.log('get menu, menuName: ', menuName);

    return this.http
      .get(this.menuUrl)
      .toPromise()
      .then(response => response.json().data as MenuItem[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
