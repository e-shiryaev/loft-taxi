import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import PropTypes from "prop-types";

const nodes = [
  {name: 'Пулково (LED)', id: 0},
  {name: 'Эрмитаж', id: 1},
  {name: 'Кинотеатр Аврора', id: 2},
  {name: 'Мариинский театр', id: 3},
];

const Combobox = (props) => (
  <FormControl fullWidth>
    <InputLabel id={'label-' + props.id}>{props.label}:</InputLabel>
    <Select
      labelId={'label-' + props.id}
      id={props.id}
      value=""
      label={props.label}
      // onChange={handleChange}
    >
      {nodes.map(node => (
        <MenuItem key={props.id + '-' + node.id} value={node.id}>{node.name}</MenuItem>
      ))}

    </Select>
  </FormControl>
);

Combobox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Combobox;
