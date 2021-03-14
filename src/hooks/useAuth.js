import { createContext, useContext, useEffect, useState } from "react";
import { auth, init, logIn as authLogin, logOut as authLogout } from "../lib/auth.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    init((user) => {
      setUser(user);
    });

    auth.on('login', setUser);

    return () => {
        auth.off('login', setUser);
    }

  }, []);

  function logIn() {
    authLogin(() => {
        setUser(user);
    })
  }

  function logOut() {
    authLogout(user => {
        setUser(null);
    })
  }

  const contextValue = {
    user,
    logIn,
    logOut
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
