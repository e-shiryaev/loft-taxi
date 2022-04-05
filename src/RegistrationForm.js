import React from 'react';
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import './css/Login.css';
import { Form, Field } from 'react-final-form';
import {connect} from "react-redux";
import {getErrorAuth} from "./reducers";
import {registration} from "./actions";

class RegistrationForm extends React.Component {
  registration = (values) => {
    this.props.registration(values);
  }

  render() {
    return (
      <div className="form login">
        <div data-testid="label-form" className="label-form">Регистрация</div>

        <Form
          onSubmit={this.registration}
          validate={values => {
            const errors = {};
            const keys = {email: 0, password: 0, name: 0, surname: 0};

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
                      label="Адрес электронной почты*"
                      placeholder="mail@mail.ru"
                      variant="standard"
                      fullWidth
                    />
                  </div>
                )}
              </Field>

              <div>
                <Field name="name">
                  {({ input, meta }) => (
                    <TextField
                      error={meta.error && meta.touched}
                      {...input}
                      label="Имя*"
                      variant="standard"
                      className="input-inline"
                    />
                  )}
                </Field>
                <Field name="surname">
                  {({ input, meta }) => (
                    <TextField
                      error={meta.error && meta.touched}
                      {...input}
                      label="Фамилия*"
                      variant="standard"
                      className="input-inline"
                    />
                  )}
                </Field>
              </div>

              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <TextField
                      error={meta.error && meta.touched}
                      {...input}
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
                variant="contained"
                onClick={form.submit}
                disabled={submitting}
                fullWidth
              >Зарегистрироваться</Button>

            </form>
          )}
        />

          <div>Уже зарегистрированы? &nbsp;
            <Link data-testid="toggle-link" className="link-active" to="/">Войти</Link>
          </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({errorAuth: getErrorAuth(state)}),
  {registration}
)(RegistrationForm);
