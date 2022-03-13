import React from 'react';
import {Button, FormControl, TextField} from "@material-ui/core";
import {MCIcon} from 'loft-taxi-mui-theme';


class ProfileForm extends React.Component {
  state = {date: '03/22', cardNumber: '123123123'};

  onChange = event => {
    if (this.state[event.target.id] !== undefined) {
      this.setState({[event.target.id]: event.target.value});
    }
  }

  render() {
    return (
      <div className="profile-form">

        <div className="label">
          <div data-testid="label-form">Профиль</div>
          <div>Введите платежные данные</div>
        </div>

        <FormControl fullWidth>
          <div>
            <TextField id="fio" label="Имя владельца*" variant="standard" />
          </div>
          <div>
            <TextField id="cardNumber" onChange={this.onChange} label="Номер карты*" value={this.state.cardNumber} type="number" variant="standard" />
          </div>
          <div>
            <TextField id="date" onChange={this.onChange} label="MM/YY*" value={this.state.date} placeholder="MM/YY*" variant="standard" />
            <TextField id="cvc" label="CVC*" placeholder="***" type="password" variant="standard" />
          </div>
        </FormControl>

        <div className="profile-card">
          <MCIcon/>
          <div className="date">{this.state.date}</div>
          <div className="card-number">{this.state.cardNumber}</div>
        </div>

        <Button color="primary" variant="contained">Сохранить</Button>
      </div>
    );
  }
}

export default ProfileForm;
