import React from 'react';

const Textbox = props => (
  <div className="textbox">
    <div>{props.text}</div>

    <input type="text" name={props.name} onChange={props.onChange || undefined} defaultValue={props.value || ''}/>
  </div>
);

export default Textbox;