import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';

import {
    LoadSuccessUsersAction,
    UsersActionTypes,
    LoadReposAction,
    LoadSuccessReposAction,
    LoadSuccessUserAction,
    LoadUserAction,
    SearchUserAction
} from '../actions/users.action';

import { CommonService } from './../../shared/services/common.service';

@Injectable()
export class UsersEffects {

    /**
     * load users
     */
    @Effect() loadUsers$ = this.actions$
        .pipe(
            ofType<LoadSuccessUsersAction>(UsersActionTypes.LOAD_USERS),
            mergeMap(
                () => this.commonService.getUsersList()
                    .pipe(
                        map(data => {
                            return new LoadSuccessUsersAction(data);
                        })
                    )
            ),
        );

    /**
     * load single user
     */
    @Effect() loadUser$ = this.actions$
        .pipe(
            ofType<LoadUserAction>(UsersActionTypes.LOAD_USER),
            mergeMap(
                (action) => {
                    return this.commonService.getUser(action.username)
                    .pipe(
                        map(data => {
                            return new LoadSuccessUserAction(data);
                        })
                    );
                }
            ),
        );

    /**
     * search user
     */
    @Effect() searchUser$ = this.actions$
        .pipe(
            ofType<SearchUserAction>(UsersActionTypes.SEARCH_USER),
            switchMap(
                (action) => {
                    return this.commonService.searchUser(action.username)
                        .pipe(
                            map((data: any) => {
                                return new LoadSuccessUsersAction(data.items);
                            })
                        );
                }
            ),
        );

    /**
     * load repos
     */
    @Effect() loadRepo$ = this.actions$
        .pipe(
            ofType<LoadReposAction>(UsersActionTypes.LOAD_REPOS),
            mergeMap(
                (action) => {
                    return this.commonService.getRepos(action.username)
                        .pipe(
                            map(data => {
                                return new LoadSuccessReposAction(data);
                            })
                        );
                }
            ),
        );

    constructor(
        private actions$: Actions,
        private commonService: CommonService
    ) { }
}
