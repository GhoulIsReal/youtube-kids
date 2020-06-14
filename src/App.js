import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

//Components
import PlayerHolder from './components/PlayerHolder/PlayerHolder';

import { ImagesProvider } from "./contexts/ImagesContext";
import { useTransition, animated } from "react-spring";

const Puzzle = React.lazy(() => {
  return import("./games/Puzzle/Puzzle");
});

const Shop = React.lazy(() => {
  return import("./games/Shop/Shop");
});

const Memory = React.lazy(() => {
  return import("./games/Memory/containers/Memory");
});

function App() {
  return (
    // <div className="App">
    //   <PlayerHolder />
    //   <animated.div key={"key"}>
    //     <Suspense fallback={""}>
    //       {/* <ImagesProvider
    //         r={require.context(
    //           "./games/Shop/images/",
    //           true,
    //           /\.(png|jpe?g|svg)$/
    //         )}
    //       >
    //         <Shop />
    //       </ImagesProvider> */}
    //       {/* <ImagesProvider
    //         r={require.context(
    //           "./games/Puzzle/images/",
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )}
    //       >
    //         <Puzzle />
    //       </ImagesProvider> */}
    //     </Suspense>
    //   </animated.div>
    // </div>
    <Router>
      <Suspense fallback={""}>
      <Switch>
        {/* <PlayerHolder></PlayerHolder> */}
        <Route exact path="/" component={PlayerHolder} />
        <Route exact path="/mem" render={() => (<Memory />)} />
        <Redirect to="404" />
      </Switch>
      </Suspense>
    </Router>
  )
}

export default App;
