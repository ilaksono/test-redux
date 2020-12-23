import useButtonData from 'hooks/useButtonData';
import React from 'react';

const AppContext = React.createContext();
export default AppContext;

export const AppProvider = ({ children }) => {

  const { increment,
    decrement }
    = useButtonData();

  return (
    <AppContext.Provider value={{
      increment,
      decrement
    }}>
      {children}
    </AppContext.Provider>
  );
};
