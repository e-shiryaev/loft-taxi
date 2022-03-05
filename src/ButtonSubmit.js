import React from 'react';
import './Submit.css';

const Submit = props => (
  <input type="submit" value={props.text} className="submit"/>
);

export default Submit;
