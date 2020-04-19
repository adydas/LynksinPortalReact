import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { INTERNAL_LINKS } from '../../enum';

import { Header } from '../../components';
import ProfilePage from '../../pages/Profile';
import { LeaderboardStats } from '../../pages/Leaderboard';
import PortalHome from '../../pages/PortalHome';
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
              component={LeaderboardStats}
            />
            <Route
              path={INTERNAL_LINKS.PORTALHOME}
              component={PortalHome}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App