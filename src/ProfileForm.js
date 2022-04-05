import React from 'react';
import {Button, TextField} from "@mui/material";
import {MCIcon} from 'loft-taxi-mui-theme';
import './css/Map.css'
import './css/Profile.css';
import {connect} from "react-redux";
import {changeCard} from "./actions";
import {getCardInfo, getErrorCard} from "./reducers";
import { Form, Field } from 'react-final-form';


class ProfileForm extends React.Component {
  submit = (values) => {
    this.props.changeCard(values);
  }

  render() {
    return (
      <div className="form profile">

        <div className="label">
          <div data-testid="label-form" className="label-form">Профиль</div>
          <div>Введите платежные данные</div>
        </div>

        <Form
          onSubmit={this.submit}
          validate={values => {
            const errors = {};
            const keys = {expiryDate: 0,
              cardNumber: 0,
              cardName: 0,
              cvc: 0};

            for (let key in keys) {
              if (!values[key]) {
                errors[key] = true;
              }
            }

            return errors
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>

              <div style={{width: '335px'}}>
                <div>

                  <Field name="cardName" initialValue={this.props.cardInfo.cardName || ''}>
                    {({ input, meta }) => (
                      <TextField
                        error={meta.error && meta.touched}
                        {...input}
                        inputProps={{
                          'data-testid': "textfield-login-email"
                        }}
                        label="Имя владельца*"
                        variant="standard"
                        fullWidth
                      />
                    )}
                  </Field>

                </div>
                <div>

                  <Field name="cardNumber" initialValue={this.props.cardInfo.cardNumber || ''}>
                    {({ input, meta }) => (
                      <TextField
                        error={meta.error && meta.touched}
                        {...input}
                        inputProps={{
                          'data-testid': "textfield-login-email"
                        }}
                        label="Номер карты*"
                        variant="standard"
                        fullWidth
                      />
                    )}
                  </Field>

                </div>
                <div>

                  <Field name="expiryDate" initialValue={this.props.cardInfo.expiryDate || ''}>
                    {({ input, meta }) => (
                      <TextField
                        error={meta.error && meta.touched}
                        {...input}
                        inputProps={{
                          'data-testid': "textfield-login-email"
                        }}
                        label="MM/YY*"
                        variant="standard"
                        placeholder="MM/YY*"
                      />
                    )}
                  </Field>

                  <Field name="cvc" initialValue={this.props.cardInfo.cvc || ''}>
                    {({ input, meta }) => (
                      <TextField
                        error={meta.error && meta.touched}
                        {...input}
                        inputProps={{
                          'data-testid': "textfield-login-email"
                        }}
                        label="CVC*"
                        variant="standard"
                        placeholder="***"
                        type="password"
                      />
                    )}
                  </Field>

                </div>
              </div>

              <div className="profile-card">
                <MCIcon/>
                <div className="date">{values.expiryDate}</div>
                <div className="card-number">{values.cardNumber}</div>
              </div>

              <div style={{color: 'red'}}>{this.props.errorCard || ''}</div>

              <Button
                variant="contained"
                onClick={form.submit}
                disabled={submitting}
                fullWidth
              >Сохранить</Button>

            </form>
          )}
        />


      </div>
    );
  }
}

export default connect(
  (state) => ({errorCard: getErrorCard(state), cardInfo: getCardInfo(state)}),
  {changeCard}
)(ProfileForm);
