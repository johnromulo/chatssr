import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '~/pages/Home';

import GlobalStyle from './styles/global';

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </>
);

export default App;
