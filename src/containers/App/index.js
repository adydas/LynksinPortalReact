import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { withRouter } from 'react-router';
import { INTERNAL_LINKS } from '../../enum';

import { Header } from '../../components';
import ProfilePage from '../../pages/Profile';
import './style.scss'

class App extends React.Component {
  render() {
    return (
      <div className="lynksin">
        <Header />
        <Router>
          <Switch>
            <Route
              exact
              path={INTERNAL_LINKS.HOME}
              component={ProfilePage}
            />
            <Route
              path={INTERNAL_LINKS.PROFILE}
              component={ProfilePage}
            />
            <Route
              path={INTERNAL_LINKS.LEEADERBOARD.STATS}
            />
            <Route
              path={INTERNAL_LINKS.PORTALHOME}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App