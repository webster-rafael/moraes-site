import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState(null);

  return (
    <UserContext.Provider value={{ userName, setUserName, userPhoto, setUserPhoto }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);