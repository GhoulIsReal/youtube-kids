import React, { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import randomInt from "./common/utils/randomInt"

//Components
import HeaderInputPlayer from './components/HeaderInputPlayer/HeaderInputPlayer';

const games = ["puzzle", "shop", "memory"];

const GamesController = React.lazy(() => import("./components/GamesController/GamesController"));

function App() {
  return (
    <Router>
      <Suspense fallback={""}>
      <Switch>
        <Route exact path="/" component={HeaderInputPlayer} />
        <Route exact path="/mem" render={() => (<GamesController currentGame={games[randomInt(0, games.length)]}/>)} />
        <Redirect to="404" />
      </Switch>
      </Suspense>
    </Router>
  )
}

export default App;
