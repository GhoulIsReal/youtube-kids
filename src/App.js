import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerHolder from './components/PlayerHolder/PlayerHolder';

import { ImagesProvider } from "./contexts/ImagesContext";
import { useTransition, animated } from "react-spring";

const Puzzle = React.lazy(() => {
  return import("./games/Puzzle/Puzzle");
});

function App() {
  return (
    <div className="App">
      {/* <PlayerHolder /> */}
      <animated.div key={"key"}>
        <Suspense fallback={""}>
          <ImagesProvider
            r={require.context(
              "./games/Puzzle/images/",
              false,
              /\.(png|jpe?g|svg)$/
            )}
          >
            <Puzzle />
          </ImagesProvider>
        </Suspense>
      </animated.div>
    </div>
  );
}

export default App;
