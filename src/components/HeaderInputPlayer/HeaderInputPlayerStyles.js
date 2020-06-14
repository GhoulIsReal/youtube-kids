import styled from 'styled-components';
import cover from './cover.jpg';

const HeaderContentContainer = styled.div`
    background-color: #f1faee;
    display: flex;
    justify-content: center;
`;

const HeaderAndContentHolder = styled.div`
    width: 1000px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
`;

const PlayerHoldingDiv = styled.div`
    width: 900px;
    height: 500px;
    background: url(${cover}) center center;
    margin-top: 50px;
`;

const AddHolder = styled.div`
    width: 100%;
    height: 100%;
`;

const FinishTaskButton = styled.button`
    width: 130px;
    height: 40px;
    text-align: center;
`;

export {
    HeaderContentContainer,
    HeaderAndContentHolder,
    PlayerHoldingDiv,
    AddHolder,
    FinishTaskButton
};