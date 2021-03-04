import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routerComponents from "./routerComponents/routerComponents";
const {home} = routerComponents


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route component={home.component} path={home.path} exact/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
