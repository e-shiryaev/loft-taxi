import React from 'react';
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {auth} from "./actions";
import './css/Form.css';
import './css/Login.css';

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


    this.setState({isErrorEmail, isErrorPassword});

    if (!isErrorEmail && !isErrorPassword) {
      this.props.auth(state.email, state.password);
    }
  }

  render() {
    return (
      <div className="form login">
        <div data-testid="label-form" className="label-form">Войти</div>
          <div>
            <TextField
              error={this.state.isErrorEmail}
              id="email"
              inputProps={{
                'data-testid': "textfield-login-email"
              }}
              label="Имя пользователя*"
              placeholder="mail@mail.ru"
              variant="standard"
              onChange={this.onChangeTextField}
              fullWidth
            />
          </div>
          <div>
            <TextField
              error={this.state.isErrorPassword}
              id="password"
              inputProps={{
                'data-testid': "textfield-login-password"
              }}
              type="password"
              label="Пароль*"
              placeholder="********"
              variant="standard"
              onChange={this.onChangeTextField}
              fullWidth
            />
          </div>

          <div style={{color: "red"}}>{this.props.errorAuth || ''}</div>

          <Button
            data-testid="button-login"
            variant="contained"
            onClick={this.login}
            fullWidth
          >Войти</Button>

          <div>Новый пользователь?</div>

          <Link
            data-testid="toggle-link"
            to="/registration"
            className="link-active"
          >Зарегистрируйтесь</Link>

      </div>
    );
  }
}

export default connect(
  (state) => ({errorAuth: state.auth.errorAuth}),
  {auth}
)(LoginForm);