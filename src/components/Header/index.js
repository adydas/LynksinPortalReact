import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { INTERNAL_LINKS } from '../../enum'
import Logo from '../../images/logo.png';
import './style.scss';


const Header = () => {
  const [item, setItem] = useState(0)
  const LEFT_MENUS = [INTERNAL_LINKS.CLUBS, INTERNAL_LINKS.MATCHES, INTERNAL_LINKS.PLAYERS, INTERNAL_LINKS.SHOP]

  return (
    <header className="lynksin-header">
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTarget" aria-controls="navbarTarget" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTarget">
          <Router>
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item ${item === 0 ? 'active' : ''}`}>
                <Link className="nav-link" to="/clubs" onClick={() => setItem(0)}>CLUBS </Link>
              </li>
              <li className={`nav-item ${item === 1 ? 'active' : ''}`}>
                <Link className="nav-link" to="/matches" onClick={() => setItem(1)}>MATCHES</Link>
              </li>
              <li className={`nav-item ${item === 2 ? 'active' : ''}`}>
                <Link className="nav-link" to="/players" onClick={() => setItem(2)}>PLAYERS</Link>
              </li>
              <li className={`nav-item ${item === 3 ? 'active' : ''}`}>
                <Link className="nav-link" to="/shop" onClick={() => setItem(3)}>SHOP</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">LOGIN </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
              </ul>
            </form>
          </Router>
        </div>
      </nav>
    </header>
  )
}

export default Header;