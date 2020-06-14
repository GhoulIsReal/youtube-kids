import styled from 'styled-components';

const InputAndContentHolder = styled.div`
    width: 1000px;
    height: 620px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
`;

const PlayerHoldingDiv = styled.div`
    width: 900px;
    height: 500px;
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
    InputAndContentHolder,
    PlayerHoldingDiv,
    AddHolder,
    FinishTaskButton
};