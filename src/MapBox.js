import React from 'react';
import mapboxgl from 'mapbox-gl';
import {connect} from "react-redux";
import {getLinestring} from "./reducers";

class MapBox extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWFzaGlyeWFldiIsImEiOiJjbDBtbDB6cmIwMHAxM2dvNmp5MjM3ZDM4In0.Ubuc05tD4wqbQFv9rGlSvg';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [30.315877, 59.939099],
      zoom: 10,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps === this.props) {
      return;
    }

    const {linestring} = this.props;

    this.drawLinestring(linestring);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  drawLinestring(linestring) {
    if (this.map.getLayer('route')) {
      this.map.removeLayer('route');
      this.map.removeSource('route');
    }

    if (linestring.length === 0) {
      return;
    }

    this.map.flyTo({
      center: linestring[0],
      zoom: 14
    })

    this.map.addSource('route', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': linestring
        }
      }
    });
    this.map.addLayer({
      'id': 'route',
      'type': 'line',
      'source': 'route',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': 'red',
        'line-width': 5
      }
    });
  }

  render() {
    return <div className="wrap-mapbox">
      <div style={{width: '100%', height: '100%'}} ref={el => {this.mapContainer = el}}></div>
    </div>;
  }
}

export default connect(
  (state) => ({linestring: getLinestring(state)})
)(MapBox);
