import React from 'react';
import PropTypes from "prop-types";

const {Provider, Consumer: AuthConsumer} = React.createContext('');

class AuthProvider extends React.Component {
  state = {
    isAuthorized: false,
    email: '',
    password: ''
  };

  static propTypes = {
    toggleAuth: PropTypes.func.isRequired
  }

  login = (email = '', password = '') => {
    this.setState({email, password, isAuthorized: true});
    this.props.toggleAuth(true);
  };

  logout = () => {
    this.setState({isAuthorized: false, email: '', password: ''});
    this.props.toggleAuth(false);
  };

  render() {
    return (
      <Provider
        value={{
          isLoggedIn: this.state.isLoggedIn,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

function authHOC(WrappedComponent) {
  return class extends React.Component {
    static displayName = 'authHOC';

    render() {
      return (
        <AuthConsumer>
          {contextProps => (
            <WrappedComponent
              {...contextProps}
              {...this.props}
            />
          )}
        </AuthConsumer>
      );
    }
  };
}

export {AuthProvider, authHOC};
