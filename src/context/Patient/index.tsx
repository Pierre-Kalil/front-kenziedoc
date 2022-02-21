import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PatientFormProps } from "../../components/formPatient/types";
import { PatientProviderData, PatientProviderProps } from "./types";
import api from "../../services/api";
import { useAuth } from "../Auth";
import toast from "react-hot-toast";

const PatientContext = createContext<PatientProviderData>(
  {} as PatientProviderData
);

export const PatientProvider = ({ children }: PatientProviderProps) => {
  const { token, user, setUser, identifyUser } = useAuth();
  const [allPatient, setAllPatient] = useState<[]>([]);
  const navigate = useNavigate();

  const CreatePatient = async (data: PatientFormProps) => {
    const { age, cpf, email, gender, health_insurance, name, password, phone } =
      data;
    await api
      .post("/patients", {
        age: age,
        cpf: cpf,
        email: email,
        gender: gender,
        health_insurance: health_insurance,
        name: name,
        phone: phone,
        permission: "patient",
      })
      .then((_) => {
        toast.success("Cadastro realizado com sucesso!");
        navigate("/login");
      })
      .catch((e) => console.log(e, "erro register"));
  };

  const FilterByPatient = async (identify: string) => {
    await api
      .get(`/patients/${identify}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => console.log(e, "erro get by email"));
  };

  useEffect(() => {
    if (token && identifyUser == "Admin") {
      api
        .get("/patients", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => console.log(res.data));

      FilterByPatient;
    }
  }, []);

  return (
    <PatientContext.Provider
      value={{ allPatient, FilterByPatient, CreatePatient }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => useContext(PatientContext);
