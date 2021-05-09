import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import CollectionPage from '../Collection/Collection.component';
import WithSpinner from '../../components/With-Spinner/WithSpinner.component';

import { selectIsCollectionsLoading } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoading(state)
})

export const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage) 