import { Dispatch, ReactNode } from "react";
import { ProfessionalFormProps } from "../../components/formProfessionl/types";

export interface ProfessionalProviderProps {
  children: ReactNode;
}

export interface ProfessionalProps {
  council_number: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  specialty: string;
  address: string;
}

export interface ProfessionalDataProps {
  FilterByProfessional: (identify: string) => void;
  CreateProfessioanal: (data: ProfessionalFormProps) => void;
  allProfessional: ProfessionalProps[];
}
