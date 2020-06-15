import styled from 'styled-components';

const FooterHolder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    height: 50px;
    width: 760px;
    border-top: 1px #dadada solid;
`;

const Footer = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: rgb(140, 137, 137);
    font-family: 'Roboto', sans-serif;
    margin 0;
    text-align: center;
`;

export {
    FooterHolder,
    Footer
}