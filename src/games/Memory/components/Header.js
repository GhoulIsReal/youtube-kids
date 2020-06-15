import React from 'react';
import { Button } from '../../../common/styles'

export default ({
    round,
    gameFinished,
    goBackToVideo
}) => (
    <div>
        <Button className="button button--warning text-center" onClick={gameFinished && goBackToVideo} disabled={round === 0}>
            { gameFinished ? "Go Back To Video!" : "Train memory game" }
        </Button>
    </div>
)
