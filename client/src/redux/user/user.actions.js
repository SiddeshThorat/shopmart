import {userActions} from './user.actionTypes';

export const setCurrentUser = user => ({
    type: userActions.SET_CURRENT_USER,
    payload: user
})

export const isSignOutSuccess = () => ({
    type: userActions.IS_SIGNOUT_SUCCESS
})