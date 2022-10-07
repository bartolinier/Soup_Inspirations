import { createContext, useState, useEffect } from 'react';

import {onAuthStateChangedListener} from "../utils/firebase/firebase"


export const UserContext = createContext({
    currentUser:{},
    setCurrentUser:()=>null

});

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

  const value = {currentUser, setCurrentUser};

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
       
      setCurrentUser(user);
      }else{
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};