import React from 'react';
import {Button, TextField} from "@mui/material";
import {MCIcon} from 'loft-taxi-mui-theme';
import './css/Map.css'
import './css/Profile.css';
import {connect} from "react-redux";
import {changeCard} from "./actions";


class ProfileForm extends React.Component {
  state = {
    inputs: {
      expiryDate: '',
      cardNumber: '',
      cardName: '',
      cvc: ''
    },
    errorData: []
  };

  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        expiryDate: '',
        cardNumber: '',
        cardName: '',
        cvc: ''
      },
      errorData: []
    };

    if (this.props.cardInfo.cardNumber) {
      this.state.inputs = {...this.state.inputs, ...this.props.cardInfo};
    }
  }


  onChange = event => {
    if (this.state.inputs[event.target.id] !== undefined) {
      this.setState({inputs: {
          ...this.state.inputs,
          [event.target.id]: event.target.value
        }});
    }
  }

  submit = () => {
    let errorData = [];
    for (let inputName in this.state.inputs) {
      const value = this.state.inputs[inputName];

      if (value === '') {
        errorData.push(inputName);
      }
    }

    this.setState({errorData});

    if (errorData.length) {
      return false;
    }

    this.props.changeCard(this.state.inputs);
  }

  render() {
    return (
      <div className="form profile">

        <div className="label">
          <div data-testid="label-form" className="label-form">Профиль</div>
          <div>Введите платежные данные</div>
        </div>

        <div style={{width: '335px'}}>
          <div>
            <TextField
              id="cardName"
              onChange={this.onChange}
              label="Имя владельца*"
              defaultValue={this.props.cardInfo.cardName || ''}
              variant="standard"
              error={this.state.errorData.indexOf('cardName') !== -1}
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="cardNumber"
              onChange={this.onChange}
              label="Номер карты*"
              defaultValue={this.props.cardInfo.cardNumber || ''}
              type="number"
              variant="standard"
              error={this.state.errorData.indexOf('cardNumber') !== -1}
              fullWidth
            />
          </div>
          <div>
            <TextField
              id="expiryDate"
              onChange={this.onChange}
              label="MM/YY*"
              defaultValue={this.props.cardInfo.expiryDate || ''}
              placeholder="MM/YY*"
              variant="standard"
              error={this.state.errorData.indexOf('expiryDate') !== -1}
            />
            <TextField
              id="cvc"
              onChange={this.onChange}
              label="CVC*"
              placeholder="***"
              type="password"
              defaultValue={this.props.cardInfo.cvc || ''}
              variant="standard"
              error={this.state.errorData.indexOf('cvc') !== -1}
            />
          </div>
        </div>

        <div className="profile-card">
          <MCIcon/>
          <div className="date">{this.state.inputs.expiryDate}</div>
          <div className="card-number">{this.state.inputs.cardNumber}</div>
        </div>

        <div style={{color: 'red'}}>{this.props.errorCard || ''}</div>

        <Button color="primary" variant="contained" onClick={this.submit}>Сохранить</Button>
      </div>
    );
  }
}

export default connect(
  (state) => ({errorCard: state.auth.errorCard, cardInfo: state.auth.card}),
  {changeCard}
)(ProfileForm);
