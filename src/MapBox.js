import React from 'react';
import ReactDOM from "react-dom";
import mapboxgl from 'mapbox-gl';

class WrapMapBox extends React.Component {

  render() {
    return ReactDOM.createPortal(this.props.children, document.querySelector('#mapbox'));
  }
}

class MapBox extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWFzaGlyeWFldiIsImEiOiJjbDBtbDB6cmIwMHAxM2dvNmp5MjM3ZDM4In0.Ubuc05tD4wqbQFv9rGlSvg';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (<div style={{width: '100%', height: '100%'}} ref={el => this.mapContainer = el}></div>);
  }
}

export {WrapMapBox, MapBox};
