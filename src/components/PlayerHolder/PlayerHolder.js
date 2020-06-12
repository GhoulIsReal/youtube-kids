import React, { useState } from 'react';
import * as styled from './PlayerHolderStyles';
import { Player } from '../Player/Player';

const PlayerHolder = () => {
		const [watchComplete, setWatchComplete] = useState(false)
		const [videoPlaying, setvideoPlaying] = useState(false)
		const [addStatus, setAddStatus] = useState(false)

		let playedSecondsArray = []

		const handleWatchAndPopUp = ({ played, playedSeconds }) => {
			if(played >= 0.65 && !watchComplete ) {
				setWatchComplete(true);
			}
			if(played >= 0.25 && !addStatus && !watchComplete) {
				playedSecondsArray.push(playedSeconds)
				setvideoPlaying(false);
				setAddStatus(true);
			}
		}

		const playTheVieo = () => {
			setvideoPlaying(true);
		}

		const checkAnswer = () => {
			setAddStatus(false)
			console.log(playedSecondsArray)
		}

    return(
			<styled.PlayerHoldingDiv>
				{!watchComplete && addStatus ? (
					<styled.AddHolder>
						<styled.FinishTaskButton onClick={checkAnswer}>
							Back to video
						</styled.FinishTaskButton>
					</styled.AddHolder>
				) : (
					<Player 
						onProgress={handleWatchAndPopUp}
						onPlay={playTheVieo}
						playing={videoPlaying}
						url="https://www.youtube.com/watch?v=0gNY0KZ2nyY"	
					/>)}
			</styled.PlayerHoldingDiv>
    )
}

export default PlayerHolder;