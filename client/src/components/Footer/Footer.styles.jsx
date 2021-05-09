import styled from 'styled-components';

export const Footer = styled.div`
height:300px;
margin: 25px ;
margin-top:35px;
border-top: 5px solid white;
`
export const FooterTitle = styled.div`
height:20%;
font-size: 50px;
font-family: sanserif;
margin: 10px 10px 0px 10px;
@media screen and (max-width:800px){
    font-size: 30px;
}
`
export const FooterDetails = styled.div`
display:flex;
height: 70%;
margin-top:2%;

@media screen and (max-width:800px){
    flex-direction:column;
}
` 
export const FooterImage = styled.img`
width: 20%;
background-image: ${({ imageUrl }) => `url(${imageUrl})`};
margin-left:25px;
margin-bottom:25px;
border: 1px solid black;
border-radius: 5%;
background-position: top;
@media screen and (max-width:800px){
    margin-left:unset;
    margin-bottom:unset;
    min-height: -webkit-fill-available;
    width:unset;
}
`
export const FooterDescription = styled.div`
margin-left: 50px;
width: 80%;
font-family: sanserif;
font-size: 25px;
display:flex;
flex-direction:column;
@media screen and (max-width:800px){
    align-content:center;
    margin-left:unset;
    font-size:20px;
    margin-top:10px
}
`
export const Title = styled.b`
margin-top: 10px;
`