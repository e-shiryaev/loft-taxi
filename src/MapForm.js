import React from 'react';
import Combobox from "./Combobox";
import ButtonCar from "./ButtonCar";
import {Button} from "@material-ui/core";

const cars = [
  {text: 'Стандарт', price: 150, imj: 'Машинка1', id: 0},
  {text: 'Бизнес', price: 250, imj: 'Машинка2', id: 1},
  {text: 'Премиум', price: 350, imj: 'Машинка3', id: 2}
];

class MapForm extends React.Component {

  render() {
    return (
      <div className="map-form">
        <form>
          <Combobox label="Откуда" id="combo-from"/>
          <Combobox label="Куда" id="combo-to"/>

          <div className="bottom">
            <div>
              {cars.map(car => (
                <ButtonCar text={car.text} price={car.price} imj={car.imj} key={car.id}/>
              ))}
            </div>

            <Button data-testid="submit-map" color="primary" variant="contained">Заказать</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default MapForm;
