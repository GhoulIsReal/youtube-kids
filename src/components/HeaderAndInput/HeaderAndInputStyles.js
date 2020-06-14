import styled from 'styled-components';

const HeaderAndInputHolder = styled.header`
    height: 55px;
    width: 100vw;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Logo = styled.img`
    height: 50px;
    width: 100px;
`;

const Form = styled.form`
  margin: 5px;
`;

const Input = styled.input`
    width: 760px;
    height: 35px;
    padding: 10px 16px;
    border: 3px solid #e63946;
    border-radius: 6px;
    font-size: 1.2rem;
    &:focus {
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
    }
    &::placeholder {
        color: #969696;
    }
`;

export {
    HeaderAndInputHolder,
    Logo,
    Input,
    Form
};