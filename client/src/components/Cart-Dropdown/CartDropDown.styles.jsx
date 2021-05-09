import styled from 'styled-components';
import CustomButton from '../Custom-Button/CustomButton.component'

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 100px;
    z-index: 5;
    @media screen and (max-width:800px){
        right: 20px;
        width: 200px
    }
`
export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
`
export const CartDropDownButton = styled(CustomButton)`
   margin-top: auto
`

export const EmptyMessageContainer = styled.span`
    margin: 50px auto;
    font-size:18px;
`