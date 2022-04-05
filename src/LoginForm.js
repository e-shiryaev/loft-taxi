import React from 'react';
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {auth} from "./actions";
import './css/Form.css';
import './css/Login.css';
import {getErrorAuth} from "./reducers";
import { Form, Field } from 'react-final-form';

class LoginForm extends React.Component {
  login = (values) => {
    this.props.auth(values.email, values.password);
  }

  render() {
    return (
      <div className="form login">
        <div data-testid="label-form" className="label-form">Войти</div>
        <Form
          onSubmit={this.login}
          validate={values => {
            const errors = {};
            const keys = {email: 0, password: 0};

            for (let key in keys) {
              if (!values[key]) {
                errors[key] = true;
              }
            }

            return errors
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email">
                {({ input, meta }) => (
                  <div>
                    <TextField
                      error={meta.error && meta.touched}
                      {...input}
                      inputProps={{
                        'data-testid': "textfield-login-email"
                      }}
                      label="Имя пользователя*"
                      placeholder="mail@mail.ru"
                      variant="standard"
                      fullWidth
                    />
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <TextField
                      error={meta.error && meta.touched}
                      {...input}
                      inputProps={{
                        'data-testid': "textfield-login-password"
                      }}
                      type="password"
                      label="Пароль*"
                      placeholder="********"
                      variant="standard"
                      fullWidth
                    />
                  </div>
                )}
              </Field>

              <div style={{color: "red"}}>{this.props.errorAuth || ''}</div>

              <Button
                data-testid="button-login"
                variant="contained"
                onClick={form.submit}
                disabled={submitting}
                fullWidth
              >Войти</Button>

            </form>
          )}
        />

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
  (state) => ({errorAuth: getErrorAuth(state)}),
  {auth}
)(LoginForm);