import React, { useState } from 'react';

const Context = React.createContext();

const UserProvider = ({ children }) => {
  let [user, setUser] = useState({})
	return <Context.Provider value={{user, setUser}}>{children}</Context.Provider>;
};

export {Context, UserProvider};
