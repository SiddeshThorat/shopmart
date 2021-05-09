import { createSelector } from 'reselect';

const selectUser = state => state.user;
//final
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)
export const selectIsSignOutSuccess = createSelector(
    [selectUser],
    user => user.isSignOutSuccess
)