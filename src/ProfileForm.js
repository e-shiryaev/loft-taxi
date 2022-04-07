import React from 'react';
import {Button, TextField} from "@mui/material";
import {MCIcon} from 'loft-taxi-mui-theme';
import './css/Map.css'
import './css/Profile.css';
import {connect} from "react-redux";
import {changeCard, emptyLinestring} from "./actions";
import {getCardInfo, getErrorCard} from "./reducers";
import { Form, Field } from 'react-final-form';


class ProfileForm extends React.Component {
  componentDidMount() {
    this.props.emptyLinestring();
  }

  submit = (values) => {
    this.props.changeCard(values);
  }

  normalizeCard = value => {
    if (!value) return value;

    const onlyNums = value.replace(/[^\d]/g, "").substr(0, 16);
    return onlyNums.length ? onlyNums.match(/.{1,4}/g).join(' ') : '';
  };

  normalizeDate = value => {
    if (!value) return value;

    const onlyNums = value.replace(/[^\d]/g, "").substr(0, 4);

    return onlyNums.length ? onlyNums.match(/.{1,2}/g).join('/') : '';
  };

  normalizeCvc = value => {
    if (!value) return value;

    return value.replace(/[^\d]/g, "").substr(0,3);
  };

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
            const valLength = {expiryDate: 5,
              cardNumber: 17,
              cardName: 0,
              cvc: 3};

            for (let key in valLength) {
              if (!values[key]) {
                errors[key] = true;
              } else {
                if (valLength[key] && values[key].length < valLength[key]) {
                  errors[key] = true;
                }
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

                  <Field name="cardNumber" initialValue={this.props.cardInfo.cardNumber || ''} parse={this.normalizeCard}>
                    {({ input, meta }) => (
                      <TextField
                        error={meta.error && meta.touched}
                        {...input}
                        inputProps={{
                          'data-testid': "textfield-login-email"
                        }}
                        label="Номер карты*"
                        placeholder="XXXX XXXX XXXX XXXX"
                        variant="standard"
                        fullWidth
                      />
                    )}
                  </Field>

                </div>
                <div>

                  <Field name="expiryDate" initialValue={this.props.cardInfo.expiryDate || ''} parse={this.normalizeDate}>
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

                  <Field name="cvc" initialValue={this.props.cardInfo.cvc || ''} parse={this.normalizeCvc}>
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
  {changeCard, emptyLinestring}
)(ProfileForm);
