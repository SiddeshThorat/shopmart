import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const  HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    margin-left: auto;
    margin-right:auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media screen and (max-width:800px){
        margin-bottom: 50px;
    }
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px 25px 0px 25px ;
    @media screen and (max-width:800px){
        padding:unset
    }   
`
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    font-weight: bold;
    @media screen and (max-width:800px){
        padding:unset
        padding-right:10px;
    }
`
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    color:black;
    :hover{
        background-color: black;
        color:white;
        font-size:15px;
        border-radius:10%;
    }
`

export const Line = styled.div`
width:80%;
border-bottom: 2px solid black;
padding-bottom: 10px;
justify-content: space-evenly;
display:flex;
@media screen and (max-width:800px){
    margin-right:30px;
}
`
