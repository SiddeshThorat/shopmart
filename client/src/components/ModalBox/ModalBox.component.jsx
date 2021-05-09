import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    Modal,
    ModalContent,
    Close
} from './ModalBox.styles';
import CustomButton from '../Custom-Button/CustomButton.component';

import { toggleModalBox } from '../../redux/cart/cart.actions';

const ModalBox = ({children}) => {
    const dispatch = useDispatch();
    return(
   <Modal>
        <ModalContent>
            <Close onClick={() =>dispatch(toggleModalBox())}>&times;</Close>
            <p>{children}</p>
            <Link to="/sign-in-sign-out">
                <CustomButton onClick={() => dispatch(toggleModalBox())}>
                    Sign In/ Register        
                </CustomButton>
            </Link>
        </ModalContent>
  </Modal>
)}

export default ModalBox;