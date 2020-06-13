import styled from 'styled-components';

const MainStyles = styled.div`
    display: flex;
    justify-fontent: center;
    align-items: center;
`;

const MainHolder = styled.div`
    display: grid;
    width: 75vw;
    height: 100%;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 23.3vw));
    grid-template-rows: repeat(auto-fit, calc(36.02vh - 25px));
    grid-gap: 50px 2.5vw;
`;

export {
    MainStyles,
    MainHolder
}