import React from 'react';
import {Button, Link, TextField} from "@material-ui/core";
import {authHOC} from "./AuthContext";

let AuthButton = ({ login }) => (
  <Button variant="contained" color="primary" onClick={login}>Зарегистрироваться</Button>
);

AuthButton = authHOC(AuthButton);

class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="login-form">
        <div data-testid="label-form">Регистрация</div>
        <form>
          <div>
            <TextField id="email" label="Адрес электронной почты*" placeholder="mail@mail.ru" variant="standard" />
          </div>

          <div>
            <TextField id="first_name" label="Имя*" variant="standard" />
            <TextField id="last_name" label="Фамилия*" variant="standard" />
          </div>

          <div>
            <TextField id="password" type="password" label="Пароль*" placeholder="********" variant="standard" />
          </div>

          <AuthButton/>

          <div>Уже зарегистрированы?</div>
          <Link data-testid="toggle-link" onClick={this.props.toggleForm}>Войти</Link>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
