import { UsersActionTypes, UserAction } from '../actions/users.action';
import { Users } from '../models/users.model';

const initialState: Users = {
    user : {},
    list: [],
    repoList: []
};

export function UsersReducer(state: object = initialState, action: UserAction) {
    switch (action.type) {
        case UsersActionTypes.LOAD_SUCCESS_USERS:
            return {
                ...state,
                list : action.payload
            };
        case UsersActionTypes.LOAD_SUCCESS_USER:
            return {
                ...state,
                user: action.payload
            };
        case UsersActionTypes.LOAD_SUCCESS_REPOS:
            return {
                ...state,
                repoList: action.payload
            };
        default:
            return state;
    }
}
