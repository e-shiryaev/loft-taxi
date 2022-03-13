import React from 'react';
import Header from "./Header";
import './Login.css';
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


class Login extends React.Component {
  state = {isShowLoginForm: true};

  toggleForm = () => {
    this.setState({isShowLoginForm: !this.state.isShowLoginForm})
  }

  render() {
    return (
      <div>
        <Header isVertical={true}/>

        {this.state.isShowLoginForm ?
          <LoginForm toggleForm={this.toggleForm}/> :
          <RegistrationForm toggleForm={this.toggleForm}/>}
      </div>
    );
  }
}

export default Login
