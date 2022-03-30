import React from 'react';
import Combobox from "./Combobox";
import ButtonCar from "./ButtonCar";
import {Button} from "@mui/material";
import './css/Map.css';
import {connect} from "react-redux";
import {loadAddressList, loadCard, loadRoute} from "./actions";
import {getAddressList, getCardInfo, getErrorRoute} from "./reducers";

const cars = [
  {text: 'Стандарт', price: 150, imj: 'Машинка1', id: 0},
  {text: 'Бизнес', price: 250, imj: 'Машинка2', id: 1},
  {text: 'Премиум', price: 350, imj: 'Машинка3', id: 2}
];

class MapForm extends React.Component {
  state = {comboFromValue: '', comboToValue: '', error: ''}

  componentDidMount() {
    if (!this.props.cardInfo.cardNumber) {
      this.props.loadCard();
    }

    this.props.loadAddressList();
  }

  handleChange = (event) => {
    const value = event.target.value;

    if (event.target.name === 'combo-from') {
      this.setState({comboFromValue: value})
    } else {
      this.setState({comboToValue: value})
    }
  }

  submit = () => {
    const {comboToValue, comboFromValue} = this.state;
    const {addresses} = this.props;

    if (comboToValue === '' || comboFromValue === '') {
      this.setState({error: 'Необходимо выбрать адреса'});
      return;
    }

    this.props.loadRoute(addresses[comboFromValue], addresses[comboToValue]);
  }

  render() {
    return (
      <div className="form map">
          <Combobox
            label="Откуда"
            id="combo-from"
            handleChange={this.handleChange}
            excludeIndex={this.state.comboToValue}
            value={this.state.comboFromValue}
          />
          <Combobox
            label="Куда"
            id="combo-to"
            handleChange={this.handleChange}
            excludeIndex={this.state.comboFromValue}
            value={this.state.comboToValue}
          />

          <div className="bottom">
            <div>
              {cars.map(car => (
                <ButtonCar text={car.text} price={car.price} imj={car.imj} key={car.id}/>
              ))}
            </div>

            <div style={{color: "red"}}>{this.state.error || this.props.errorRoute}</div>

            <Button
              data-testid="submit-map"
              variant="contained"
              onClick={this.submit}
              fullWidth
            >Заказать</Button>
          </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    cardInfo: getCardInfo(state),
    addresses: getAddressList(state),
    errorRoute: getErrorRoute(state)
  }),
  {loadCard, loadAddressList, loadRoute}
)(MapForm);
