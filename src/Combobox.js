import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
import {connect} from "react-redux";
import {getAddressList} from "./reducers";

class Combobox extends React.Component {

  render() {

    return (
      <FormControl fullWidth>
        <InputLabel id={'label-' + this.props.name}>{this.props.label}:</InputLabel>
        <Select
          labelId={'label-' + this.props.name}
          {...this.props.input}
        >

          {this.props.addresses.map((node, index) => (
            index !== this.props.excludeIndex ? <MenuItem key={this.props.name + '-' + index} value={index}>{node}</MenuItem> : ''
          ))}

        </Select>
      </FormControl>
    );
  }
}

export default connect(
  (state) => ({addresses: getAddressList(state)}),
)(Combobox);
