import { createContext, useState } from "react";

export const UserMenuContext = createContext({
  userMenu: "",
  setUserMenu: () => null,
});

export const UserMenuProvider = ({ children }) => {
  const [userMenu, setUserMenu] = useState(false);

  const value = { userMenu, setUserMenu };

  return (
    <UserMenuContext.Provider value={value}>
      {children}
    </UserMenuContext.Provider>
  );
};
