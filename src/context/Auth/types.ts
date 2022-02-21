import { Dispatch, ReactNode, SetStateAction } from "react";
import { LoginProps } from "../../components/formLogin/types";
import { NavigateFunction } from "react-router-dom";
import { PatientProps } from "../Patient/types";
import { ProfessionalProps } from "../Professional/types";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthProviderData {
  signin: (data: LoginProps, navigate: NavigateFunction) => Promise<void>;
  identifyUser: any;
  token: string;
  user: PatientProps | ProfessionalProps;
  setUser: Dispatch<SetStateAction<PatientProps | ProfessionalProps>>;
}

export interface Decoded {
  fresh: boolean;
  iat: number;
  jti: string;
  type: string;
  sub: {
    id: number;
    cpf: string;
    age: number;
    gender: string;
    email: string;
    name: string;
    phone: string;
    health_insurance: string;
    active: boolean;
    council_number: string;
    speciality: string;
    permission: string;
    isAdm: boolean;
  };
}

export interface userIdentify {
  name: string;
  id?: number;
  gender?: string;
  email: string;
  active?: boolean;
  address?: string;
  specialty?: string;
  council_number?: string;
}
