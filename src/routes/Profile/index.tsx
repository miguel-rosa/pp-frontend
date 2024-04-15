import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as Theme from '@theme';
import * as API from '@api';
import { useUser } from '@providers';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './styles.module.scss'

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
  padding: '15px'
};

const Menu = () => {
  return (
    <div id="menu" style={menuStyle}>
      <Link to="/profile">Base</Link>
      <Link to="/profile/support">Support</Link>
    </div>
  );
};

export const BaseView = () => {
  const {state:{user}, dispatch:{ unmaskPhone}} = useUser()

  if(!user.id) return (<></>)
  return (
    <div id="base-view">
      <div>
        <div >
          <h1>{user.first_name} {user.last_name}</h1>
          <h2>{user.email}</h2>
          <p>{user.phone || user.masked_phone}</p>
          <button onClick={unmaskPhone}>See phone</button>
        </div>
        <div>
          <h3>{user.address?.line1}, {user.address?.city}, {user.address?.state} {user.address?.country} {user.address?.postal_code}</h3>
        </div>
      </div>
    </div>
  ); 
};

type Inputs = {
  title: string
  message: string
}

export const SupportView = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async ({
    title, message
  }) => {

    const response = await API.createSupportTicket({title, message})

    reset()
    if(response.status !== 200) {
      const errorMessage: Response & {
        message:string
      } = await response.json()
      return alert(errorMessage.message)
    }
    
    alert("Success, our support will reach you soon!")
  }

  return (
    <div id="support-view" className={styles.support}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title</label>
        <input required {...register('title')} placeholder='title of your ticket'/>
        <label>Message</label>
        <input required  {...register('message')} placeholder='message of your ticket'/>
        <input type="submit"/>
      </form>
    </div>
  );
};

const profileStyle = {
  backgroundColor: Theme.colors.beige,
  width: '100vw',
  height: '100vh',
  display: 'flex'
};

const Profile = () => {
  return (
    <div id="profile" style={profileStyle}>
      <Menu />
      <div id="views">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
