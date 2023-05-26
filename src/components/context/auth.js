import Cookies from "js-cookie";
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: "",isLogin:false });
  useEffect(() => {
    const data = Cookies.get("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
        isLogin: parseData.isLogin
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
