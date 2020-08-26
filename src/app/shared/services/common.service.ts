import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  /**
   * get user list
   */
  getUsersList(): Observable<Array<object>> {
    return this.http.get<Array<object>>(`${environment?.API_ENDPOINT}/users?per_page=100`);
  }

  /**
   * get user based on username
   * @param username string
   */
  getUser(username: string): Observable<object> {
    return this.http.get<object>(`${environment?.API_ENDPOINT}/users/${username}`);
  }

  /**
   * get repo based on username
   * @param username string
   */
  getRepos(username: string): Observable<Array<object>> {
    return this.http.get<Array<object>>(`${environment?.API_ENDPOINT}/users/${username}/repos`);
  }

  /**
   * search user
   * @param username string
   */
  searchUser(username: string): Observable<Array<object>> {
    return this.http.get<Array<object>>(`${environment?.API_ENDPOINT}/search/users?q=${username}`);
  }

  /**
   * show page loader
   */
  showPageLoader(): void {
    $('#overlay').fadeIn();
  }

  /**
   * hide page loader
   */
  hidePageLoader(): void {
    $('#overlay').fadeOut();
  }
}
