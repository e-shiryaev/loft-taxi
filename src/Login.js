import React from 'react';
import Header from "./Header";
import './Login.css';
import LoginForm from "./LoginForm";

class Login extends React.Component {
  redirect = (page) => {
    this.props.redirect(page);
  }

  render() {
    return (
      <div>
        <Header isVertical="1"/>
        <LoginForm redirect={this.redirect}/>
      </div>
    );
  }
}

export default Login
