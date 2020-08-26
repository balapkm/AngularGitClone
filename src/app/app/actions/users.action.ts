import { Action } from '@ngrx/store';

/**
 * list of actions
 */
export enum UsersActionTypes {
    LOAD_USERS = '[USERS] Load Users',
    LOAD_SUCCESS_USERS = '[USERS] Load Success Users',
    LOAD_USER = '[USER] Load User',
    LOAD_SUCCESS_USER = '[USER] LOAD SUCCESS USER',
    SEARCH_USER = '[USER] Search User',
    LOAD_REPOS = '[USERS] Load Repo',
    LOAD_SUCCESS_REPOS = '[USERS] Load Success Repos'
}

/**
 * trigger to load list of users
 */
export class LoadUsersAction implements Action {
    readonly type = UsersActionTypes.LOAD_USERS;
}

/**
 * load the list of users into store
 */
export class LoadSuccessUsersAction implements Action {
    readonly type = UsersActionTypes.LOAD_SUCCESS_USERS;

    constructor(public payload: Array<object>) { }
}

/**
 * trigger single user based on user name
 */
export class LoadUserAction implements Action {
    readonly type = UsersActionTypes.LOAD_USER;

    constructor(public username: string) {
    }
}

/**
 * Load single user based on user name
 */
export class LoadSuccessUserAction implements Action {
    readonly type = UsersActionTypes.LOAD_SUCCESS_USER;

    constructor(public payload: object) { }
}

/**
 * Search user based on username
 */
export class SearchUserAction implements Action {
    readonly type = UsersActionTypes.SEARCH_USER;

    constructor(public username: string) {
    }
}

/**
 * Load repos
 */
export class LoadReposAction implements Action {
    readonly type = UsersActionTypes.LOAD_REPOS;

    constructor(public username: string) { }
}

export class LoadSuccessReposAction implements Action {
    readonly type = UsersActionTypes.LOAD_SUCCESS_REPOS;

    constructor(public payload: Array<object>) { }
}

// tslint:disable-next-line: max-line-length
export type UserAction = SearchUserAction
| LoadUsersAction
| LoadSuccessUsersAction
| LoadUserAction
| LoadSuccessUserAction
| LoadReposAction
| LoadSuccessReposAction;
