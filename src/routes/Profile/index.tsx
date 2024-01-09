import React from 'react';
import { Link } from 'react-router-dom';
import * as Theme from '@theme';

/* TODO:
### Layout
1. Implement a layout with a menu on the left and views on the right. Use grid and/or flexbox.
2. Implement a way to navigate between base and support views. Use "react-router-dom".

### Base view
1. Display user's full name and their email. Use UserProvider's functionality (see providers.js)
2. Display user's masked phone number, and implement a way to unmask it. Use UserProvider's context.
3. Display user's address.

### Support view
1. Use your preferred form library to implement a form that will call API's createSupportTicket.
2. Display a success message after the form is submitted.
Make sure to handle field validation.
*/

const menuStyle = {
  display: 'flex',
  'flex-direction': 'column',
  height: '100vh',
  'overflow-y': 'scroll',
};

const Menu = () => {
  return (
    <div id="menu" style={menuStyle}>
      <Link to="/profile">Base</Link>
      <Link to="/profile/support">Support</Link>
    </div>
  );
};

const BaseView = () => {
  return (
    <div id="base-view">
      TODO:
    </div>
  ); 
};

const SupportView = () => {
  return (
    <div id="support-view">
      TODO:
    </div>
  );
};

const profileStyle = {
  backgroundColor: Theme.colors.beige,
  width: '100vw',
  height: '100vh',
};

const Profile = () => {
  return (
    <div id="profile" style={profileStyle}>
      <Menu />
      <div id="views">
        TODO:
      </div>
    </div>
  );
};

export default Profile;
