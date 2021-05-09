import React from 'react';
import {useDispatch} from 'react-redux';

import {
    Modal,
    ModalContent,
    SuccessBand,
    WrapDiv,
    Children
} from './SuccessPopUpBox.styles';
import CustomButton from '../Custom-Button/CustomButton.component';

import {isSignOutSuccess} from '../../redux/user/user.actions';

const SuccessPopUpBox = ({children}) => {
    const dispatch = useDispatch();
    return(
   <Modal>
        <ModalContent>
            <WrapDiv>
                <SuccessBand />
                <Children>{children}</Children>
            </WrapDiv> 
                <CustomButton onClick={() => {
                    dispatch(isSignOutSuccess())
                }}>
                   OK        
                </CustomButton>
        </ModalContent>
  </Modal>
)}


export default SuccessPopUpBox;