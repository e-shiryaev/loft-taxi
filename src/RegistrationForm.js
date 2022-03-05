import React from 'react';
import Submit from "./ButtonSubmit";
import Textbox from "./Textbox";

class RegistrationForm extends React.Component {
  redirectMap = (event) => {
    event.preventDefault();
    this.props.redirect('Map');
  }

  redirectLogin = () => {
    this.props.redirect('Login');
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.redirectMap}>
          <Textbox text="Адрес электронной почты*" name="email"/>
          <Textbox text="Имя*" name="first_name"/>
          <Textbox text="Фамилия*" name="last_name"/>
          <Textbox text="Пароль*" name="login"/>

          <Submit text="Зарегистрироваться"/>

          <div>Уже зарегистрированы?</div>
          <a onClick={this.redirectLogin}>Войти</a>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
