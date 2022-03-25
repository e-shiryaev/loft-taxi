import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from "@material-ui/core";
// import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAddressList} from "./reducers";

class Combobox extends React.Component {

  render() {

    return (
      <FormControl fullWidth>
        <InputLabel id={'label-' + this.props.id}>{this.props.label}:</InputLabel>
        <Select
          labelId={'label-' + this.props.id}
          name={this.props.id}
          value=""
          label={this.props.label}
          onChange={this.props.handleChange}
        >

          {this.props.addresses.map((node, index) => (
            index !== this.props.excludeIndex ? <MenuItem key={this.props.id + '-' + index} value={index}>{node}</MenuItem> : ''
          ))}

        </Select>
      </FormControl>
    );
  }
}

export default connect(
  (state) => ({addresses: getAddressList(state)}),
)(Combobox);
