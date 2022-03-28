import React from 'react';
import './css/App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import {connect} from "react-redux";
import Header from "./Header";
import {Redirect, Route, Switch} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import MapForm from "./MapForm";
import ProfileForm from "./ProfileForm";
import MapBox from "./MapBox";
import {hasLogged} from "./reducers";

class App extends React.Component {

  render() {
    return (
      <StyledEngineProvider injectFirst>
        <div className="App">
          <Header/>

          {this.props.isLoggedIn ?
            <>
              <MapBox/>

              <Switch>
                <Route path="/map" component={MapForm}/>
                <Route path="/profile" component={ProfileForm}/>
                <Redirect to="/map"/>
              </Switch>
            </>
          :
            <Switch>
              <Route path="/" exact component={LoginForm}/>
              <Route path="/registration" component={RegistrationForm}/>
              <Redirect to="/"/>
            </Switch>
          }
        </div>
      </StyledEngineProvider>
    );
  }
}

export default connect(
  (state) => ({isLoggedIn: hasLogged(state)})
)(App);
