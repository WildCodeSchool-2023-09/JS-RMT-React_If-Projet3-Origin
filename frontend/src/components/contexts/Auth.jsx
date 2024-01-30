import { createContext, useState } from "react";

const AuthContex = createContext();

// eslint-disable-next-line import/prefer-default-export, react/prop-types
export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <AuthContex.Provider value={(user, setUser)}>
      {children}
    </AuthContex.Provider>
  );
}
