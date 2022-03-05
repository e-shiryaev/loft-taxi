import React from 'react';
import Textbox from "./Textbox";
import ProfileCard from "./ProfileCard";
import Submit from "./ButtonSubmit";


class ProfileForm extends React.Component {
  state = {date: '03/22', cardNumber: '123123123'};

  onChange = event => {
    if (this.state[event.target.name] !== undefined) {
      this.setState({[event.target.name]: event.target.value});
    }
  }

  stopLoad = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="profile-form">

        <div className="label">
          <div>Профиль</div>
          <div>Введите платежные данные</div>
        </div>

        <form onSubmit={this.stopLoad}>
          <Textbox text="Имя владельца*" name="fio"/>
          <Textbox text="Номер карты*" name="cardNumber" onChange={this.onChange} value={this.state.cardNumber}/>

          <Textbox text="MM/YY*" name="date" onChange={this.onChange} value={this.state.date}/>
          <Textbox text="CVC*" name="cvc"/>

          <Submit text="Сохранить"/>
        </form>

        <ProfileCard date={this.state.date} cardNumber={this.state.cardNumber}/>
      </div>
    );
  }
}

export default ProfileForm;
