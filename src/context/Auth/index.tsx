import { createContext, useContext, useState } from "react";
import { NavigateFunction } from "react-router";
import api from "../../services/api";
import { AuthProviderProps, Decoded, AuthProviderData } from "./types";
import { LoginProps } from "../../components/formLogin/types";
import { UserProps } from "../Patient/types";
import { useProfessional } from "../Professional";
import { usePatient } from "../Patient";
import jwt_decode from "jwt-decode";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { FilterByPatient } = usePatient();
  const { FilterByProfessional } = useProfessional();
  const [user, setUser] = useState<[]>([]);
  const [token, setToken] = useState(
    localStorage.getItem("@kenzieDoc:token") || ""
  );
  const [identifyUser, setIdentifyUser] = useState(
    localStorage.getItem("@kenzieDoc:userIdentify")
  );

  const signin = async (data: LoginProps, navigate: NavigateFunction) => {
    await api
      .post("/login", data)
      .then((res) => {
        console.log(res);
        localStorage.clear();
        localStorage.setItem("@kenzieDoc:token", res.data.token);
        setToken(res.data.token);

        const decoded = jwt_decode<Decoded>(token);
        localStorage.setItem(
          "@kenzieDoc:userBy",
          JSON.stringify(decoded.sub.cpf)
        );
        navigate("/dashboard");
        FilterByProfessional(
          JSON.parse(localStorage.getItem("@kenzieDoc:userBy") || "")
        );
        // localStorage.setItem(
        //   "@kenzieDoc:userIdentify",
        //   JSON.stringify(decoded.sub.permission)
        // );
        // localStorage.setItem(
        //   "@kenzieDoc:userBy",
        //   JSON.stringify(decoded.sub.email)
        // );

        // if (decoded.sub.permission === "professional") {
        //   navigate("/dashboardprofessional");
        //   FilterByProfessional(
        //     JSON.parse(localStorage.getItem("@kenzieDoc:userBy") || "")
        //   );
        // } else if (decoded.sub.permission === "patient") {
        //   navigate("/dashboardpatient");
        //   FilterByPatient(
        //     JSON.parse(localStorage.getItem("@kenzieDoc:userBy") || "")
        //   );
        // } else if (decoded.sub.permission === "Admin") {
        //   navigate("/dashboardadmin");
        //   // setUser(decoded.sub);
        // }
      })
      .catch((err) => console.log(err, "erro"));
  };
  return (
    <AuthContext.Provider
      value={{ signin, identifyUser, token, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
