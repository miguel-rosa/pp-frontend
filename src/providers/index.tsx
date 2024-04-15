import React, { useContext, useEffect, useState } from 'react';
import * as API from '@api';
import { User } from 'src/types/user';

/* TODO:
Complete the UserProvider to manage user data and phone number masking.
1. Fetch user data with API.me() on provider's mount.
2. Implement a function to toggle phone number masking (you can fetch unmasked phone number with API.phone()
3. Pass down the user data and the toggle function to the context value.
*/

const UserContext = React.createContext(null);

interface UserProviderProps {
  children: React.ReactNode;
};

type UserProps = {
  state: {
    user: User
  }
  dispatch: {
    unmaskPhone: () => void
  }
}

export const UserProvider:React.FC<UserProviderProps> = (props) => {

  const [user, setUser] = useState<User>({} as User)

  const unmaskPhone = async () => {
    const {phone} = await API.phone()

    setUser(previousUser => ({...previousUser, phone }))
  }

  useEffect(() => {
    let ignore = false;
    API.me().then(json => {
      if (!ignore) {
        setUser(json);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);


  return (
    <UserContext.Provider value={{
      state: {
        user
      },
      dispatch: {
        unmaskPhone
      }
    }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user:UserProps = useContext(UserContext)
  return user
};