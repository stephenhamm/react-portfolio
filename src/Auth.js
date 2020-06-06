import React, { useEffect, useState } from 'react';
import firebase from './firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setAdminUser);
  }, []);

  return (
    <AuthContext.Provider value={{ adminUser }}>
      {children}
    </AuthContext.Provider>
  );
};
