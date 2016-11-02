// React Core
import React from 'react';
import ReactDOM from 'react-dom';
// React Router
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
// React Redux
import { Provider, connect } from 'react-redux';
// Redux Devtools

import configureStore from "./store";

// controller view
import App from "./components/app";
import Bar from "./components/lessons/01-bar";
import Labels from "./components/lessons/02-labels";
import Line from "./components/lessons/03-line";
import Scatter from "./components/lessons/04-scatter";
import ScatterAnimated from "./components/lessons/04a-animated";
import ColorAnimated from "./components/lessons/04b-animated-color";
import AnimatedBeetleScatter from "./components/lessons/04c-animated-beetles";
import Tree from "./components/lessons/05-tree";
import Hexbin from "./components/lessons/06-hexbin";
import Multiline from "./components/lessons/07-multi-line";
import Nobels from "./components/lessons/nobels";
import HelloWorld from "./components/lessons/hello-world";

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <Route path="bar" component={Bar}/>
              <Route path="labels" component={Labels}/>
              <Route path="line" component={Line}/>
              <Route path="scatter" component={Scatter}/>
              <Route path="scatter-animated" component={ScatterAnimated}/>
              <Route path="animated-beetle" component={AnimatedBeetleScatter}/>
              <Route path="color-animated" component={ColorAnimated}/>
              <Route path="tree" component={Tree}/>
              <Route path="hexbin" component={Hexbin}/>
              <Route path="multiline" component={Multiline}/>
            </Route>
            <Route path="nobel/:gender/:country/:otherFilters" component={Nobels}/>
            <Route path="hello" component={HelloWorld}/>
          </Router>
        </Provider>
      </div>
    );
  }
}

// for material ui
import injectTapEventPlugin from "react-tap-event-plugin";

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(<Root/>, document.getElementById("root"));
