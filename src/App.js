import React from 'react';
import './App.css';
import Map from "./Map";
import Login from "./Login";
import {WrapMapBox, MapBox} from "./MapBox";
import {AuthProvider} from "./AuthContext";

class App extends React.Component {
  state = {isLoggedIn: false};

  toggleAuth = (isLoggedIn) => {
    this.setState({isLoggedIn})
  }

  render() {
    return (
      <AuthProvider toggleAuth={this.toggleAuth}>
        <div className="App">
          {this.state.isLoggedIn ? <Map/> : <Login/>}
        </div>
      </AuthProvider>
    );
  }
}

const AppAll = () => (
  <>
    <App/>

    <WrapMapBox>
      <MapBox/>
    </WrapMapBox>
  </>
)

export {App, AppAll};
