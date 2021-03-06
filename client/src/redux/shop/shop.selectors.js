import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';


export const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections 
)
//final
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = memoize( collectionUrlParam => (
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
        )
    )
);

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoading = createSelector(
    [selectShop],
    shop => !!shop.collections
)