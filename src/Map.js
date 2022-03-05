import React from 'react';
import Header from "./Header";
import MapForm from "./MapForm";
import './Map.css';

class Map extends React.Component {
  redirect = (page) => {
    this.props.redirect(page);
  }

  render() {
    return (
      <div>
        <Header redirect={this.redirect}/>
        <MapForm/>
      </div>
    );
  }
}

export default Map;
