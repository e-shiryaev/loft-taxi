import React from 'react';
import Combobox from "./Combobox";
import ButtonCar from "./ButtonCar";
import {Button} from "@mui/material";
import './css/Map.css';
import {connect} from "react-redux";
import {loadCard} from "./actions";

const cars = [
  {text: 'Стандарт', price: 150, imj: 'Машинка1', id: 0},
  {text: 'Бизнес', price: 250, imj: 'Машинка2', id: 1},
  {text: 'Премиум', price: 350, imj: 'Машинка3', id: 2}
];

class MapForm extends React.Component {

  componentDidMount() {
    if (!this.props.cardInfo.cardNumber) {
      this.props.loadCard();
    }
  }

  render() {
    return (
      <div className="form map">
          <Combobox label="Откуда" id="combo-from"/>
          <Combobox label="Куда" id="combo-to"/>

          <div className="bottom">
            <div>
              {cars.map(car => (
                <ButtonCar text={car.text} price={car.price} imj={car.imj} key={car.id}/>
              ))}
            </div>

            <Button
              data-testid="submit-map"
              variant="contained"
              fullWidth
            >Заказать</Button>
          </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({cardInfo: state.auth.card}),
  {loadCard}
)(MapForm);
