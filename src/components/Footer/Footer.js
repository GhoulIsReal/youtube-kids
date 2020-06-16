import React from 'react';
import * as styled from './FooterStyles';

const Footer = ({ url }) => {
    return(
        <styled.FooterHolder style={{ position: url === '' ? 'absolute' : 'static', bottom: 0 }}>
            <styled.Footer>Copyright 2020 © KidsVi All Rights Reserved</styled.Footer>
        </styled.FooterHolder>
    )
}

export default Footer;