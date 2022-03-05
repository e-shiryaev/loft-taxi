import React from 'react';

const nodes = [
  {name: 'Пулково (LED)', id: 0},
  {name: 'Эрмитаж', id: 1},
  {name: 'Кинотеатр Аврора', id: 2},
  {name: 'Мариинский театр', id: 3},
];

const Combobox = (props) => (
  <div className="combobox">
    <div>{props.text}:</div>

    <select>
      {nodes.map(node => (
        <option key={node.id}>{node.name}</option>
      ))}
    </select>

  </div>
);

export default Combobox;
