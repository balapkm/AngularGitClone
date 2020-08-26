import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../models/app-state.model';
import { Observable, interval } from 'rxjs';
import { LoadUsersAction, SearchUserAction, LoadReposAction, LoadUserAction } from 'src/app/app/actions/users.action';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  /**
   * git user lists
   */
  public gitUserList$: Observable<Array<object>>;

  /**
   * Query String
   */
  public queryString = '';

  /**
   * git user information
   */
  public gitUserInfo$: Observable<object>;

  /**
   * git user repos information
   */
  public gitUserRepoInfo$: Observable<Array<object>>;

  /**
   * construtor
   */
  constructor(private store: Store<AppState>, private commonService: CommonService) {  }

  /**
   * Angular constructor
   */
  ngOnInit(): void {
    this.commonService.showPageLoader();
    this.gitUserList$ = this.store.select(store => store.users.list);
    this.gitUserInfo$ = this.store.select(store => store.users.user);
    this.gitUserRepoInfo$ = this.store.select(store => store.users.repoList);

    /**
     * load user list
     */
    this.store.dispatch(new LoadUsersAction());

    /**
     * subscribe user list and load the first user repos
     */
    this.gitUserList$.subscribe((users: any) => {
      if (users.length !== 0) {
        this.getUser(users[0].login);
        setTimeout(() => this.commonService.hidePageLoader(), 1000);
      }
    });
  }

  /**
   * search user based on key
   * @param key user type name
   */
  searchUser(key: string): void {
    if (key.length > 3) {
      this.store.dispatch(new SearchUserAction(key));
    }
  }

  /**
   * get user information based on user click
   * @param user user name
   */
  getUser(user): void{
    this.commonService.showPageLoader();
    this.store.dispatch(new LoadUserAction(user));
    this.store.dispatch(new LoadReposAction(user));
    setTimeout(() => this.commonService.hidePageLoader(), 500);
  }
}
