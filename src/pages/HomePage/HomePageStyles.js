import styled from 'styled-components';

const MainStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainHolder = styled.div`
    display: grid;
    width: 1300px;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
    grid-template-rows: repeat(auto-fit, calc(230px));
    grid-gap: 35px 25px;
`;

export {
    MainStyles,
    MainHolder
}