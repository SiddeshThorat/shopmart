import { shopActions} from './shop.actionTypes'
import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsSuccess = (collectionsMap) =>({
    type: shopActions.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsStart = () => ({
    type: shopActions.FETCH_COLLECTIONS_START
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: shopActions.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart());
        collectionRef
        .get()
        .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap));
             }
        )
        .catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}