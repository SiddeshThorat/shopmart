import React from 'react';
import {
    Footer , FooterTitle, FooterDetails, FooterImage, FooterDescription,Title
} from './Footer.styles';

const FooterComponent = () => (
    <Footer>
        <FooterTitle>
            Portfolio Project !!!!
        </FooterTitle>
        <FooterDetails>
            <FooterImage imageUrl={'https://media-exp1.licdn.com/dms/image/C4E03AQHGuwSa1we0RA/profile-displayphoto-shrink_800_800/0/1545370665936?e=1625097600&v=beta&t=LY97wyQmapF1ctVHY2IvPrRIeXJG9VpUm9YLb01iSdY'}></FooterImage>
            <FooterDescription>
                <Title>Siddesh Thorat(Software Engineer)</Title>
                <Title><a href="https://www.linkedin.com/in/siddesh-thorat-b3b215145/">LinkedIn</a></Title>
                <Title>siddeshthorat1998@gmail.com</Title>
            </FooterDescription>
        </FooterDetails>
    </Footer>
)

export default FooterComponent;