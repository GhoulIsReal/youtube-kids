import React, { useState, useRef } from 'react';
import * as styled from './PlayerHolderStyles';
import { Player } from '../Player/Player';

const PlayerHolder = () => {
		const [watchComplete, setWatchComplete] = useState(false)
		const [videoPlaying, setvideoPlaying] = useState(false)

		const handleWatchComplete = ({ played }) => {
			if(played >= 0.65 && !watchComplete ) {
				setWatchComplete(true);
			}
		}

		const pauseTheVideo = ({ played }) => {
			if(played >= 0.25 && !watchComplete) {
				setvideoPlaying(false);
				setTimeout(setWatchComplete(true), 3000);
			}
		}

		const playTheVieo = () => {
			setvideoPlaying(true);
		}

    return(
			<styled.PlayerHoldingDiv>
				<styled.addHolder style={{  }}></styled.addHolder>
				<Player 
					onProgress={handleWatchComplete, pauseTheVideo}
					onPlay={playTheVieo}
					playing={videoPlaying}
					url="https://www.youtube.com/watch?v=0gNY0KZ2nyY"	
				/>
			</styled.PlayerHoldingDiv>
    )
}

export default PlayerHolder;