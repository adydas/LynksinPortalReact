import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { INTERNAL_LINKS } from '../../enum'
import Logo from '../../images/logo.png';
import './style.scss';


const Header = () => {
  const [item, setItem] = useState(0)
  const MENUS = [INTERNAL_LINKS.CLUBS, INTERNAL_LINKS.MATCHES, INTERNAL_LINKS.PLAYERS, INTERNAL_LINKS.SHOP]

  return (
    <header className="lynksin-header">
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href={INTERNAL_LINKS.HOME}>
          <img src={Logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTarget" aria-controls="navbarTarget" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTarget">
          <Router>
            <ul className="navbar-nav mr-auto">
              {
                MENUS.map((x, index) => (
                  <li className={`nav-item ${item === index ? 'active' : ''}`}>
                    <Link className="nav-link" to={x} onClick={() => setItem(index)}>{x.slice(1).toUpperCase()}</Link>
                  </li>
                ))
              }
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={INTERNAL_LINKS.LOGIN}>LOGIN </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={INTERNAL_LINKS.REGISTER}>Sign Up</Link>
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