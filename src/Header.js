import React from "react";
import {Link} from "@material-ui/core";
import {Logo} from 'loft-taxi-mui-theme';
import PropTypes from "prop-types";
import {authHOC} from "./AuthContext";

let AuthButton = ({ logout }) => (
  <div className="navigation-button">
    <Link data-testid="navigation-link-logout" onClick={logout}>Выйти</Link>
  </div>
);

AuthButton = authHOC(AuthButton);

class Header extends React.Component {
  static propTypes = {
    isVertical: PropTypes.bool
  };

  static defaultProps = {
    isVertical: false
  }

  redirect = (event) => {
    this.props.redirect(event.target.parentElement.id);
  }

  render() {

    return (
      <header className={this.props.isVertical ? 'header-vertical' : 'header'}>
        <div className="logo"><Logo/></div>

        <div className="navigation">
          <div className="navigation-button" id="Map">
            <Link data-testid="navigation-link-map" onClick={this.redirect}>Профиль</Link>
          </div>
          <div className="navigation-button" id="Profile">
            <Link data-testid="navigation-link-profile" onClick={this.redirect}>Профиль</Link>
          </div>

          <AuthButton/>
        </div>

      </header>
    );
  }
}

export default Header;
