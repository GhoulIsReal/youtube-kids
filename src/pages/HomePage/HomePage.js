import React from 'react';
import * as styled from './HomePageStyles';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

const HomePage = () => {
    return(
        <styled.MainStyles>
            <styled.MainHolder>
                <Thumbnail></Thumbnail>
                <Thumbnail></Thumbnail>
                <Thumbnail></Thumbnail>
                <Thumbnail></Thumbnail>
                <Thumbnail></Thumbnail>
                <Thumbnail></Thumbnail>
                <Thumbnail></Thumbnail>
                <Thumbnail></Thumbnail>
            </styled.MainHolder>
        </styled.MainStyles>
    )
}

export default HomePage;