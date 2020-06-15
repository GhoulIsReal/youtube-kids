import styled from 'styled-components';

const Holder = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const Divider = styled.hr`
    width: 45px;
    border: 6px solid #bbb;
    border-radius: 5px;
    margin: 40px auto;
`;

const Text = styled.div`
    width: 760px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    height: 350px;
`;

const TextParagraph = styled.p`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 36px;
    height: 50px;
    color: #222121;
    cursor: default
`;

const TextItself = styled.p`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 18px;
    width: 100%;
    height: 280px;
    color: #222121;
    cursor: default;
`;

export {
    Holder,
    Divider,
    Text,
    TextParagraph,
    TextItself
}