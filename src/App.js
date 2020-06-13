import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

//Components
import PlayerHolder from './components/PlayerHolder/PlayerHolder';
import HomePage from './pages/HomePage/HomePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import { ImagesProvider } from "./contexts/ImagesContext";
import { useTransition, animated } from "react-spring";

const Puzzle = React.lazy(() => {
  return import("./games/Puzzle/Puzzle");
});

function App() {
  return (
    // <div className="App">
    //   {/* <PlayerHolder /> */}
    //   <animated.div key={"key"}>
    //     <Suspense fallback={""}>
    //       <ImagesProvider
    //         r={require.context(
    //           "./games/Puzzle/images/",
    //           false,
    //           /\.(png|jpe?g|svg)$/
    //         )}
    //       >
    //         <Puzzle />
    //       </ImagesProvider>
    //     </Suspense>
    //   </animated.div>
    // </div>
    <Router>
      <Switch>
        {/* <PlayerHolder></PlayerHolder> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="404" component={PageNotFound} />
        <Redirect to="404" />
      </Switch>
    </Router>
  )
}

export default App;
