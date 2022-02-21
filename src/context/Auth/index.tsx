import { createContext, useContext, useState } from "react";
import { NavigateFunction } from "react-router";
import api from "../../services/api";
import { AuthProviderProps, Decoded, AuthProviderData } from "./types";
import { LoginProps } from "../../components/formLogin/types";
import { PatientProps } from "../Patient/types";
import jwt_decode from "jwt-decode";
import { ProfessionalProps } from "../Professional/types";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<PatientProps | ProfessionalProps>(
    {} as PatientProps | ProfessionalProps
  );
  const [token, setToken] = useState(
    localStorage.getItem("@kenzieDoc:token") || ""
  );

  const signin = async (data: LoginProps, navigate: NavigateFunction) => {
    await api
      .post("/login", data)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@kenzieDoc:token", res.data.token);
        setToken(res.data.token);

        const decoded = jwt_decode<Decoded>(token);

        localStorage.setItem(
          "@kenzieDoc:userBy",
          JSON.stringify(
            decoded.cpf || decoded.council_number || decoded.isAdm == true
          )
        );
        navigate("/dashboard");
      })
      .catch((err) => console.log(err, "erro"));
  };
  console.log(user);
  return (
    <AuthContext.Provider value={{ signin, token, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
