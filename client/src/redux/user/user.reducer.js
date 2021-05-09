import {userActions} from './user.actionTypes';


const INITIAL_STATE ={
    currentUser: null,
    isSignOutSuccess: false
}
const userReducer = ( state = INITIAL_STATE , action) => {
    switch(action.type){
        case userActions.SET_CURRENT_USER:
             return {
                 ...state,
                 currentUser: action.payload
             }
        case userActions.IS_SIGNOUT_SUCCESS:
            return{
                ...state,
                isSignOutSuccess: !state.isSignOutSuccess
            }

        default:
          return state;
    }
}

export default userReducer;