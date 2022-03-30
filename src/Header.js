import React from "react";
import {Link as UILink} from "@material-ui/core";
import {Logo} from 'loft-taxi-mui-theme';
// import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logOut} from "./actions";
import {Link} from 'react-router-dom'
import {hasLogged} from "./reducers";

class Header extends React.Component {
  render() {

    return (
      <header className={this.props.isLoggedIn ? 'header' : 'header-vertical'}>
        <div className="logo"><Logo/></div>

        <div className="navigation">
          <div className="navigation-button" id="Map">
            <Link data-testid="navigation-link-map" to="/map">Карта</Link>
          </div>
          <div className="navigation-button" id="Profile">
            <Link data-testid="navigation-link-profile" to="/profile">Профиль</Link>
          </div>

          <div className="navigation-button">
            <UILink data-testid="navigation-link-logout" onClick={this.props.logOut}>Выйти</UILink>
          </div>
        </div>

      </header>
    );
  }
}

export default connect(
  (state) => ({isLoggedIn: hasLogged(state)}),
  {logOut}
)(Header);
