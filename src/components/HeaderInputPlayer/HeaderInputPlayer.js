import React, { useState, Suspense } from "react";
import * as styled from "./HeaderInputPlayerStyles";
import { Player } from "../Player/Player";
import HeaderAndInput from "../HeaderAndInput/HeaderAndInput";
import DescriptionAndDivider from "../DescriptionAndDivider/DescriptionAndDivider";
import Footer from "../Footer/Footer";

function HeaderInputPlayer({ currentGame }) {
  const initialState = {
    watchComplete: false,
    videoPlaying: false,
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

  const GamesController = React.lazy(() => import("../GamesController/GamesController"));

  const Game = (props) => (<Suspense fallback={""}><GamesController currentGame={props.currentGame} goBackToVideo={checkAnswer} /></Suspense>)

  return (
    <styled.HeaderContentContainer>
      <styled.HeaderAndContentHolder>
        <HeaderAndInput onSubmit={onSubmit}></HeaderAndInput>
        {!(!state.watchComplete && state.popStatus === 1) ?
          (<>{!!(state.url.length) &&
            <styled.PlayerHoldingDiv>
              <Player
                onProgress={handleProgress}
                playing={state.videoPlaying}
                url={state.url + state.timing}
              />
            </styled.PlayerHoldingDiv>
          }
            <DescriptionAndDivider />
            <Footer /></>)
          :
          (<Game currentGame={currentGame} />)
        }
      </styled.HeaderAndContentHolder>
    </styled.HeaderContentContainer>
  );
}

export default HeaderInputPlayer;
