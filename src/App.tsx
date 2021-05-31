import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'

import GlobalStyles from './Styles/GlobalStyles';

import Properties from './Pages/Properties';
import BlankPage from './Pages/BlankPage';
import InfoProperty from './Pages/InfoProperty';

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyles />
      
      <Switch>
        <Route exact path='/' component={BlankPage} />
        <Route path='/calendar' component={BlankPage} />
        <Route path='/clients' component={BlankPage} />
        <Route path='/budget' component={BlankPage} />
        <Route path='/properties'component={Properties} />
        <Route path='/control' component={BlankPage} />
        <Route path='/infoProperty' component={InfoProperty} />
      </Switch>
    </Fragment>
  );
}

export default App;
