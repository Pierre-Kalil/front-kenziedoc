import { createContext, useContext, useEffect, useState } from "react";
import { NavigateFunction } from "react-router";
import api from "../../services/api";
import { AuthProviderProps, Decoded, AuthProviderData } from "./types";
import { LoginProps } from "../../components/formLogin/types";
import jwt_decode from "jwt-decode";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(
    localStorage.getItem("@kenzieDoc:token") || ""
  );
  const [userType, setUserType] = useState<string>("");
  console.log(userType.length);
  const signin = async (data: LoginProps, navigate: NavigateFunction) => {
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@kenzieDoc:token", res.data.token);
        setToken(res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err, "erro"));
  };

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode<Decoded>(token);
      localStorage.setItem(
        "@kenzieDoc:userBy",
        JSON.stringify(decoded.cpf || decoded.council_number || decoded.isAdm)
      );
      setUserType(localStorage.getItem("@kenzieDoc:userBy") || "");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ signin, token, user, setUser, userType }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
