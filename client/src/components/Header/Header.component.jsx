import React from 'react'
import { connect } from 'react-redux';

import { ReactComponent as Logo} from '../../images/310997.svg'
import  CartIcon from '../Cart-Icon/CartIcon.component';
import CartDropDown from '../Cart-Dropdown/CartDropDown.component'
import {HeaderContainer, LogoContainer,OptionsContainer,OptionLink,Line} from './Header.styles'

import {auth} from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import {resetCartAndSetSignOutSuccess} from '../../redux/cart/cart.actions';

const Header = ({currentUser,hidden,dispatch}) => {
    return(
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer>
                <Line>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="">
                    CONTACT
                </OptionLink>
                {
                    currentUser? 
                     (<OptionLink as='div' onClick={() => {
                         auth.signOut()
                         dispatch(resetCartAndSetSignOutSuccess())
                        
                     }}>SIGN OUT</OptionLink>) :
                     (<OptionLink to="/sign-in-sign-out" >SIGN IN</OptionLink>)
                }
                
                </Line>
                <CartIcon isEnabled={!!currentUser} /> 
            </OptionsContainer>
            {hidden ? null :<CartDropDown /> }   
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
   currentUser : selectCurrentUser,
   hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);