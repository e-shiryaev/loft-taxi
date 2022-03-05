import React from 'react';
import Submit from "./ButtonSubmit";
import Textbox from "./Textbox";

class LoginForm extends React.Component {
  redirectMap = (event) => {
    event.preventDefault();
    this.props.redirect('Map');
  }

  redirectRegistration = () => {
    this.props.redirect('Registration');
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.redirectMap}>
          <Textbox text="Имя пользователя*" name="login"/>
          <Textbox text="Пароль*" name="pass"/>

          <Submit text="Войти"/>

          <div>Новый пользователь?</div>
          <a onClick={this.redirectRegistration}>Зарегистрируйтесь</a>
        </form>
      </div>
    );
  }
}

export default LoginForm;
