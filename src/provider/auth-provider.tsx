import { createContext, ReactNode, useState } from "react";

type User = {
  email: string;
  password: string;
  isAuth: boolean;
};

export const AuthContext = createContext<
  Pick<User, "isAuth"> & { updateFn: (isAuth: boolean) => void }
>({
  isAuth: false,
  updateFn: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuthUpdate = (authStatus: boolean) => {
    setIsAuth(authStatus);
  };

  return (
    <AuthContext.Provider value={{ isAuth, updateFn: handleAuthUpdate }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
