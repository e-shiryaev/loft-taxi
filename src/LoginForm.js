import React from 'react';
import {Button, TextField} from "@material-ui/core";
import {authHOC} from "./AuthContext";

class LoginForm extends React.Component {
  state = {email: '', password: '', isErrorEmail: false, isErrorPassword: false};

  onChangeTextField = (event) => {
    if (this.state[event.target.id] !== undefined) {
      this.setState({[event.target.id]: event.target.value});
    }
  }

  login = () => {
    const state = this.state;
    const isErrorEmail = state.email.length === 0;
    const isErrorPassword = state.password.length === 0;


    this.setState({isErrorEmail, isErrorPassword})

    if (!isErrorEmail && !isErrorPassword) {
      this.props.login(state.email, state.password);
    }
  }

  render() {
    return (
      <div className="login-form">
        <div data-testid="label-form">Войти</div>
        <form>
          <div>
            <TextField
              error={this.state.isErrorEmail}
              id="email"
              data-testid="textfield-login-email"
              label="Имя пользователя*"
              placeholder="mail@mail.ru"
              variant="standard"
              onChange={this.onChangeTextField}
            />
          </div>
          <div>
            <TextField
              error={this.state.isErrorPassword}
              id="password"
              data-testid="textfield-login-password"
              type="password"
              label="Пароль*"
              placeholder="********"
              variant="standard"
              onChange={this.onChangeTextField}
            />
          </div>

          <Button data-testid="button-login" variant="contained" color="primary" onClick={this.login}>Войти</Button>

          <div>Новый пользователь?</div>

          <Button color="primary" data-testid="toggle-link" onClick={this.props.toggleForm}>Зарегистрируйтесь</Button>

        </form>
      </div>
    );
  }
}

LoginForm = authHOC(LoginForm);

export default LoginForm;
