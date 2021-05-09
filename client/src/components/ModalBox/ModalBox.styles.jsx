import styled from 'styled-components';

export const Modal = styled.div`
display: block;
position: fixed; 
z-index: 1;
padding-top: 100px; 
left: 25%;
top: 0;
width: 50%; 
height: 100%; 
`

export const ModalContent = styled.div`
background-color: #fefefe;
margin: auto;
padding: 20px;
border: 1px solid #888;
width: 80%;
font-size:15px;
font-weight: bold;
color: black;
@media screen and (max-width:800px){
 overflow:hidden;
 width:100%;
}
`

export const Close = styled.span`
color: #aaaaaa;
float: right;
font-size: 28px;
font-weight: bold;

  :hover,:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    }
`
