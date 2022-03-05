import React from 'react';
import Combobox from "./Combobox";
import ButtonCar from "./ButtonCar";
import Submit from "./ButtonSubmit";

const cars = [
  {text: 'Стандарт', price: '150', imj: 'Машинка1', id: 0},
  {text: 'Бизнес', price: '250', imj: 'Машинка2', id: 1},
  {text: 'Премиум', price: '350', imj: 'Машинка3', id: 2}
];

class MapForm extends React.Component {
  stopLoad = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="map-form">
        <form onSubmit={this.stopLoad}>
          <Combobox text="Откуда"/>
          <Combobox text="Куда"/>

          <div className="bottom">
            <div>
              {cars.map(car => (
                <ButtonCar text={car.text} price={car.price} imj={car.imj} key={car.id}/>
              ))}
            </div>

            <Submit text="Заказать"/>
          </div>
        </form>
      </div>
    );
  }
}

export default MapForm;
