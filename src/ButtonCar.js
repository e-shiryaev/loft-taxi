const ButtonCar = (props) => (
  <div className="button-car">
    <div className="text">{props.text}</div>
    <div className="const">Стоимость</div>
    <div className="price">{props.price}Р</div>
    <div className="imj">{props.imj}</div>
  </div>
);

export default ButtonCar;
