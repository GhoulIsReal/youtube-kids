import React, { useState, useEffect, useRef } from "react";
import * as styled from "./HeaderInputPlayerStyles";
import { Player } from "../Player/Player";
import HeaderAndInput from "../HeaderAndInput/HeaderAndInput";

function HeaderInputPlayer() {
  const initialState = {
    watchComplete: false,
    videoPlaying: false,
    input: "",
    url: "",
    timing: "",
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
      timing: `?t=${Math.round(state.playedSeconds)}`,
      videoPlaying: true,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = event.target.input_name.value;
    if (value !== state.url) {
      setState({
        ...initialState,
        url: value,
      });
    }
  };

  return (
    <styled.HeaderContentContainer>
      <styled.HeaderAndContentHolder>
        <HeaderAndInput onSubmit={onSubmit}></HeaderAndInput>
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
              url={state.url + state.timing}
            />
          )}
        </styled.PlayerHoldingDiv>
      </styled.HeaderAndContentHolder>
    </styled.HeaderContentContainer>
  );
}

export default HeaderInputPlayer;
