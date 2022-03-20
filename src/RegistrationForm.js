import React from 'react';
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import './css/Login.css';

class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="form login">
        <div data-testid="label-form" className="label-form">Регистрация</div>
        <form>
          <div>
            <TextField
              id="email"
              label="Адрес электронной почты*"
              placeholder="mail@mail.ru"
              variant="standard"
              fullWidth
            />
          </div>

          <div>
            <TextField
              id="first_name"
              label="Имя*"
              variant="standard"
              className="input-inline"
            />
            <TextField
              id="last_name"
              label="Фамилия*"
              variant="standard"
              className="input-inline"
            />
          </div>

          <div>
            <TextField
              id="password"
              type="password"
              label="Пароль*"
              placeholder="********"
              variant="standard"
              fullWidth
            />
          </div>

          <Button variant="contained" color="primary">Зарегистрироваться</Button>

          <div>Уже зарегистрированы? &nbsp;
            <Link data-testid="toggle-link" className="link-active" to="/">Войти</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
