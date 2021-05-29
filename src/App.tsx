import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './Styles/GlobalStyles';

import Properties from './Pages/Properties';

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      
      <Switch>
        <Route path='/' component={Properties}  />
        <Route path='/calendar' />
        <Route path='/clients' />
        <Route path='/budget' />
        <Route path='/properties'/>
        <Route path='/control' />
      </Switch>
    </Fragment>
  );
}

export default App;
