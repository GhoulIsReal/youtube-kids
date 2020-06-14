import React from 'react';
import * as styled from './InputStyles';

const Input = ({ onKeyDown }) => {
    return(
        <styled.Input type="text" placeholder="Please insert a valid video URL" onKeyDown={onKeyDown} />
    )
}

export { Input };

