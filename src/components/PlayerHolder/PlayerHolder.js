import React, { useState, useEffect } from "react";
import * as styled from "./PlayerHolderStyles";
import { Player } from "../Player/Player";

const PlayerHolder = () => {
  const initialState = {
    watchComplete: false,
    videoPlaying: false,
    url: "https://www.youtube.com/watch?v=0gNY0KZ2nyY",
    playedSeconds: 0,
    popStatus: 0,
  };
  const [state, setState] = useState(initialState);

  const handleProgress = ({ played, playedSeconds }) => {
    if (played >= 0.65 && !state.watchComplete) {
      setState((prev) => ({
        ...prev,
        watchComplete: true,
      }));
    }

    if (played >= 0.25 && state.popStatus === 0 && !state.watchComplete) {
      setState((prev) => ({
        ...prev,
        playedSeconds: playedSeconds,
        videoPlaying: false,
        popStatus: 1,
      }));
    }
  };

  const checkAnswer = () => {
    setState((prev) => ({
      ...prev,
			popStatus: 2,
			url: `${state.url}?t=${Math.round(state.playedSeconds)}`,
			videoPlaying: true,
    }));
  };

  return (
    <styled.PlayerHoldingDiv>
      {!state.watchComplete && state.popStatus === 1 ? (
        <styled.AddHolder>
          <styled.FinishTaskButton onClick={checkAnswer}>
            Back to video
          </styled.FinishTaskButton>
        </styled.AddHolder>
      ) : (
        <Player
          onProgress={handleProgress}
          // onPlay={playTheVieo}
          playing={state.videoPlaying}
          url={state.url}
        />
      )}
    </styled.PlayerHoldingDiv>
  );
};

export default PlayerHolder;
