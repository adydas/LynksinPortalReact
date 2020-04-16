import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Header } from '../../components';
import './style.scss'

class App extends React.Component {
  render() {
    return (
      <div className="lynksin">
        <Header />
      </div>
    )
  }
}

export default App;