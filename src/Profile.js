import React from 'react';
import Header from "./Header";
import ProfileForm from "./ProfileForm";
import './Profile.css';

class Profile extends React.Component {
  redirect = (page) => {
    this.props.redirect(page);
  }

  render() {
    return (
      <div>
        <Header redirect={this.redirect}/>
        <ProfileForm/>
      </div>
    );
  }
}

export default Profile
