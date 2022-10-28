import { createContext, useState, useEffect } from "react";
import { UserContext } from "./user.context";

export const UserMenuContext = createContext({
  userMenu: "",
  setUserMenu: () => null,
});

export const UserMenuProvider = ({ children }) => {
  const [userMenu, setUserMenu] = useState(false);

  const value = { userMenu, setUserMenu };

  //   useEffect(() => {
  //     setUserMenu(false);
  //   }, []);

  return (
    <UserMenuContext.Provider value={value}>
      {children}
    </UserMenuContext.Provider>
  );
};
