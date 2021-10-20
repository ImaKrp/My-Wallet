import React, { createContext, useState } from "react";

export interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@myWallet:user");
    return !!isLogged;
  });

  const signIn = (email: string, password: string): void => {
    if (email === "imakrp@gmail.com" && password === "123") {
      const user = {
        email: "imakrp@gmail.com",
        password: "123",
      };
      localStorage.setItem("@myWallet:user", JSON.stringify(user));
      setLogged(true);
    }
  };

  const signOut = (): void => {
    localStorage.removeItem("@myWallet:user");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
