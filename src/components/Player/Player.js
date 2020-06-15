import React from "react";
import * as styled from "./PlayerStyles";
import ReactPlayer from 'react-player/lazy';

const Player = ({ onProgress, url, playing, onPlay }) => {
  return(
		<styled.PlayerDiv>
			<ReactPlayer 
				url={url}
				controls={true}
				width="889px"
				height="500px"
				playing={playing}
				onProgress={onProgress}
				onPlay={onPlay}
			/>
		</styled.PlayerDiv>
	);
};

export {Player};
