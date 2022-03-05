import React from 'react';
import './App.css';
import Map from "./Map";
import Profile from "./Profile";
import Login from "./Login";
import Registration from "./Registration";

const pages = {Map, Profile, Login, Registration};

class App extends React.Component {
  state = {page: 'Login'};

  redirect = (page) => {
    this.setState({page})
  }

  render() {
    const Page = pages[this.state.page]

    return (
      <div className="App">
        <Page redirect={this.redirect}/>
      </div>
    );
  }
}

export default App;
