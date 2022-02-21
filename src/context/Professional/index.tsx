import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ProfessionalFormProps } from "../../components/formProfessionl/types";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { ProfessionalDataProps, ProfessionalProviderProps } from "./types";

const ProfessionalContext = createContext<ProfessionalDataProps>(
  {} as ProfessionalDataProps
);

export const ProfessionalProvider = ({
  children,
}: ProfessionalProviderProps) => {
  const { token, setUser, identifyUser } = useAuth();
  const [allProfessional, setAllProfessional] = useState<[]>([]);
  const navigate = useNavigate();

  const CreateProfessioanal = async (data: ProfessionalFormProps) => {
    const {
      council_number,
      name,
      email,
      phone,
      speciality,
      address,
      password,
    } = data;
    await api
      .post("/professional", {
        council_number: council_number,
        name: name,
        email: email,
        phone: phone,
        speciality: speciality,
        address: address,
        password: password,
        permission: "professional",
      })
      .then((_) => {
        toast.success("Cadastro realizado com sucesso!");
        navigate("/login");
      })
      .catch((e) => console.log(e, "erro register"));
  };

  const FilterByProfessional = async (identify: string) => {
    await api
      .get(`/professional/${identify}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => console.log(e, "erro get by email"));
  };

  useEffect(() => {
    if (token) {
      console.log(token);
      api
        .get("/professional", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          setAllProfessional(res.data);
        })
        .catch((_) => toast.error("Ops! Tente novamente."));
    }
    FilterByProfessional;
  }, []);

  return (
    <ProfessionalContext.Provider
      value={{ FilterByProfessional, CreateProfessioanal, allProfessional }}
    >
      {children}
    </ProfessionalContext.Provider>
  );
};

export const useProfessional = () => useContext(ProfessionalContext);
