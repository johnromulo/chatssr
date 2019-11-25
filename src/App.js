import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
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
