import React from 'react';
import * as styled from './HeaderAndInputStyles';
import logo from './logo.png';

const Header = ({ onSubmit }) => {
    return(
        <styled.HeaderAndInputHolder>
            <styled.Logo src={logo}></styled.Logo>
                <styled.Form onSubmit={onSubmit}>
                <styled.Input name="input_name" type="url" required placeholder="Please insert a valid video URL, e.g., https://www.youtube.com/watch?v=ytsd1hF4QxQ" />
            </styled.Form>
        </styled.HeaderAndInputHolder>
    )
}

export default Header;