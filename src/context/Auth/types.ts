import { Dispatch, ReactNode, SetStateAction } from "react";
import { LoginProps } from "../../components/formLogin/types";
import { NavigateFunction } from "react-router-dom";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthProviderData {
  signin: (data: LoginProps, navigate: NavigateFunction) => Promise<void>;
  token: string;
  userType: string;
}

export interface Decoded {
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
}
