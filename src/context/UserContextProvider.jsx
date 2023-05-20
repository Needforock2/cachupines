import React, { useEffect, useState } from 'react'
import { UserContext } from './userContext'
import { onAuthStateChanged, getAuth } from "firebase/auth";


export const UserContextProvider = ({children}) => {

    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      });

    }, [currentUser, auth]);
   
  return (
    <UserContext.Provider value={{currentUser}} >
        {children}
    </UserContext.Provider>
  )
}
