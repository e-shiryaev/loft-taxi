import React from 'react';
import Header from "./Header";
import MapForm from "./MapForm";
import './Map.css';
import './Profile.css';
import ProfileForm from "./ProfileForm";

class Map extends React.Component {
  state = {isShowMain: true};

  redirect = (page) => {
    this.setState({isShowMain: page === 'Map'});
  }

  render() {
    return (
      <div>
        <Header redirect={this.redirect}/>
        {this.state.isShowMain ? <MapForm/> : <ProfileForm/>}
      </div>
    );
  }
}

export default Map;
