import styled from 'styled-components';

const ThumbnailHoldingDiv = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 170px;
`;

const Title = styled.p`
    margin: 0;
    width: 90%;
    height: 60px;
`;

export {
    ThumbnailHoldingDiv,
    Thumbnail,
    Title
}