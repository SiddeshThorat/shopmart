import React,{useEffect,lazy, Suspense} from 'react'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const CollectionPage = lazy(() => import('../Collection/Collection.component'))
const CollectionsOverview = lazy(() => import('../../components/Collection-Overview/CollectionOverview.component')) 
 
const Shoppage = ( { fetchCollectionsStart, match  }) => {
    useEffect( () => {
        fetchCollectionsStart();
    },[fetchCollectionsStart])
   return(
            <div className="shoppage">
                <Suspense fallback={<Spinner />}>
                    <Route exact path={`${match.path}`} 
                    component={CollectionsOverview}/>
                    <Route path={`${match.path}/:collectionId`}
                    component={CollectionPage}
                    />
                 </Suspense>
            </div>
        )
    }

const mapDispatchToProps = (dispatch) =>({
    fetchCollectionsStart : () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(Shoppage);