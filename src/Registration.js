import React from 'react';
import Header from "./Header";
import './Login.css';
import RegistrationForm from "./RegistrationForm";

class Registration extends React.Component {
  redirect = (page) => {
    this.props.redirect(page);
  }

  render() {
    return (
      <div>
        <Header isVertical="1"/>
        <RegistrationForm redirect={this.redirect}/>
      </div>
    );
  }
}

export default Registration
