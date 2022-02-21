import { ReactNode } from "react";
import { PatientFormProps } from "../../components/formPatient/types";
import { NavigateFunction } from "react-router-dom";

export interface PatientProviderProps {
  children: ReactNode;
}

export interface UserProps {
  age: number;
  cpf: string;
  email: string;
  gender: string;
  health_insurance: string;
  name: string;
  phone: string;
}

export interface PatientProviderData {
  allPatient: [];
  CreatePatient: (data: PatientFormProps, navigate: NavigateFunction) => void;
  FilterByPatient: (identify: string) => void;
}
