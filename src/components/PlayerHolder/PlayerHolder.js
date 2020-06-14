import React, { useState, useEffect, useRef } from "react";
import * as styled from "./PlayerHolderStyles";
import { Player } from "../Player/Player";
import { Input } from "../Input/Input";

function PlayerHolder() {
  const initialState = {
    watchComplete: false,
    videoPlaying: false,
    input: '', 
    url: '',
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

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevUrl = usePrevious(state.url);

  const onKeyDown = (event) => {
    let e = event.target.value
    if(event.key === "Enter"){
      console.log(prevUrl)
      setState((prev) => ({
        ...prev,
        url: e,
        popStatus: prevUrl === state.url && state.popStatus === 2 ? 2 : 0,
        watchComplete: false,
      }))
    }
  }

  return (
      <styled.InputAndContentHolder>
        <Input onKeyDown={onKeyDown}></Input>
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
      </styled.InputAndContentHolder>
  );
};

export default PlayerHolder;
