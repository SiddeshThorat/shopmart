import React from 'react';
import {useSelector,useDispatch} from 'react-redux';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles';

import { addItem,toggleModalBox } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' image={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => (
        user.currentUser ?
        dispatch(addItem(item)) :
        dispatch(toggleModalBox())
      )
        
        } inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};


export default CollectionItem;