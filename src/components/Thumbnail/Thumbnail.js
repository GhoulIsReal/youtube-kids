import React from 'react';
import * as styled from './ThumbnailStyles';

const Thumbnail = () => {
    return(
        <styled.ThumbnailHoldingDiv>
            <styled.Thumbnail src="https://i.imgur.com/RyVdhjV.jpg"></styled.Thumbnail>
            <styled.Title>How to? Ok. How to? Ok. How to? Ok.</styled.Title>
        </styled.ThumbnailHoldingDiv>
    )
}

export default Thumbnail;